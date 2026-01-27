<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  waveSpeed?: number
  waveFrequency?: number
  waveAmplitude?: number
  waveColor?: [number, number, number]
  colorNum?: number
  pixelSize?: number
}

const props = withDefaults(defineProps<Props>(), {
  waveSpeed: 0.05,
  waveFrequency: 3,
  waveAmplitude: 0.3,
  waveColor: () => [0.5, 0.5, 0.5],
  colorNum: 4,
  pixelSize: 2
})

const canvasRef = ref<HTMLCanvasElement | null>(null)

let gl: WebGLRenderingContext | null = null
let program: WebGLProgram | null = null
let animationId: number
let startTime: number

const vertexShaderSource = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragmentShaderSource = `
precision highp float;

uniform vec2 resolution;
uniform float time;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform float colorNum;
uniform float pixelSize;

// Bayer 8x8 dithering matrix
float bayer8x8(vec2 p) {
  ivec2 ip = ivec2(mod(p, 8.0));
  int index = ip.x + ip.y * 8;

  // Inline bayer matrix lookup
  float matrix[64];
  matrix[0] = 0.0; matrix[1] = 48.0; matrix[2] = 12.0; matrix[3] = 60.0;
  matrix[4] = 3.0; matrix[5] = 51.0; matrix[6] = 15.0; matrix[7] = 63.0;
  matrix[8] = 32.0; matrix[9] = 16.0; matrix[10] = 44.0; matrix[11] = 28.0;
  matrix[12] = 35.0; matrix[13] = 19.0; matrix[14] = 47.0; matrix[15] = 31.0;
  matrix[16] = 8.0; matrix[17] = 56.0; matrix[18] = 4.0; matrix[19] = 52.0;
  matrix[20] = 11.0; matrix[21] = 59.0; matrix[22] = 7.0; matrix[23] = 55.0;
  matrix[24] = 40.0; matrix[25] = 24.0; matrix[26] = 36.0; matrix[27] = 20.0;
  matrix[28] = 43.0; matrix[29] = 27.0; matrix[30] = 39.0; matrix[31] = 23.0;
  matrix[32] = 2.0; matrix[33] = 50.0; matrix[34] = 14.0; matrix[35] = 62.0;
  matrix[36] = 1.0; matrix[37] = 49.0; matrix[38] = 13.0; matrix[39] = 61.0;
  matrix[40] = 34.0; matrix[41] = 18.0; matrix[42] = 46.0; matrix[43] = 30.0;
  matrix[44] = 33.0; matrix[45] = 17.0; matrix[46] = 45.0; matrix[47] = 29.0;
  matrix[48] = 10.0; matrix[49] = 58.0; matrix[50] = 6.0; matrix[51] = 54.0;
  matrix[52] = 9.0; matrix[53] = 57.0; matrix[54] = 5.0; matrix[55] = 53.0;
  matrix[56] = 42.0; matrix[57] = 26.0; matrix[58] = 38.0; matrix[59] = 22.0;
  matrix[60] = 41.0; matrix[61] = 25.0; matrix[62] = 37.0; matrix[63] = 21.0;

  for (int i = 0; i < 64; i++) {
    if (i == index) return matrix[i] / 64.0;
  }
  return 0.0;
}

// Perlin noise functions
vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
  g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 1.0;
  float freq = waveFrequency;
  for (int i = 0; i < 4; i++) {
    value += amp * abs(cnoise(p));
    p *= freq;
    amp *= waveAmplitude;
  }
  return value;
}

float pattern(vec2 p) {
  vec2 p2 = p - time * waveSpeed;
  return fbm(p + fbm(p2));
}

vec3 dither(vec3 color, vec2 fragCoord) {
  vec2 scaledCoord = floor(fragCoord / pixelSize);
  float threshold = bayer8x8(scaledCoord) - 0.25;
  float stepSize = 1.0 / (colorNum - 1.0);
  color += threshold * stepSize;
  color = clamp(color - 0.2, 0.0, 1.0);
  return floor(color * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
}

void main() {
  // Pixelate UV
  vec2 pixelCoord = floor(gl_FragCoord.xy / pixelSize) * pixelSize;
  vec2 uv = pixelCoord / resolution;
  uv -= 0.5;
  uv.x *= resolution.x / resolution.y;

  // Generate pattern
  float f = pattern(uv);
  vec3 col = mix(vec3(0.0), waveColor, f);

  // Apply dithering
  col = dither(col, gl_FragCoord.xy);

  gl_FragColor = vec4(col, 1.0);
}
`

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function createProgram(gl: WebGLRenderingContext, vs: WebGLShader, fs: WebGLShader): WebGLProgram | null {
  const program = gl.createProgram()
  if (!program) return null
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
    return null
  }
  return program
}

function init() {
  const canvas = canvasRef.value
  if (!canvas) return false

  gl = canvas.getContext('webgl')
  if (!gl) {
    console.error('WebGL not supported')
    return false
  }

  const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  if (!vs || !fs) return false

  program = createProgram(gl, vs, fs)
  if (!program) return false

  // Create fullscreen quad
  const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

  const positionLoc = gl.getAttribLocation(program, 'position')
  gl.enableVertexAttribArray(positionLoc)
  gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

  startTime = performance.now()
  return true
}

function render() {
  if (!gl || !program || !canvasRef.value) return

  const canvas = canvasRef.value
  const width = canvas.clientWidth
  const height = canvas.clientHeight

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
    gl.viewport(0, 0, width, height)
  }

  gl.useProgram(program)

  const time = (performance.now() - startTime) / 1000

  gl.uniform2f(gl.getUniformLocation(program, 'resolution'), width, height)
  gl.uniform1f(gl.getUniformLocation(program, 'time'), time)
  gl.uniform1f(gl.getUniformLocation(program, 'waveSpeed'), props.waveSpeed)
  gl.uniform1f(gl.getUniformLocation(program, 'waveFrequency'), props.waveFrequency)
  gl.uniform1f(gl.getUniformLocation(program, 'waveAmplitude'), props.waveAmplitude)
  gl.uniform3f(gl.getUniformLocation(program, 'waveColor'), props.waveColor[0], props.waveColor[1], props.waveColor[2])
  gl.uniform1f(gl.getUniformLocation(program, 'colorNum'), props.colorNum)
  gl.uniform1f(gl.getUniformLocation(program, 'pixelSize'), props.pixelSize)

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

  animationId = requestAnimationFrame(render)
}

onMounted(() => {
  if (init()) {
    render()
  }
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
})
</script>

<template>
  <canvas ref="canvasRef" class="dither-canvas" />
</template>

<style scoped>
.dither-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
