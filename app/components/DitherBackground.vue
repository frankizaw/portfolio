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

let gl: WebGLRenderingContext | WebGL2RenderingContext | null = null
let program: WebGLProgram | null = null
let animationId: number = 0
let startTime: number = 0

const vertexShaderSource = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragmentShaderSource = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform float colorNum;
uniform float pixelSize;

// Pure mathematical Bayer 8x8 calculation (100% mobile WebGL compatible)
float bayer2(vec2 p) {
  vec2 q = mod(floor(p), 2.0);
  if (q.y < 0.5) {
    return (q.x < 0.5) ? 0.0 : 2.0;
  } else {
    return (q.x < 0.5) ? 3.0 : 1.0;
  }
}

float bayer4(vec2 p) {
  return 4.0 * bayer2(p) + bayer2(p * 0.5);
}

float bayer8x8(vec2 p) {
  return (4.0 * bayer4(p) + bayer2(p * 0.25)) / 64.0;
}

// Simplex/Perlin noise functions
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
  vec2 pixelCoord = floor(gl_FragCoord.xy / pixelSize) * pixelSize;
  vec2 uv = pixelCoord / resolution;
  uv -= 0.5;
  uv.x *= resolution.x / resolution.y;

  float f = pattern(uv);
  vec3 col = mix(vec3(0.0), waveColor, f);
  col = dither(col, gl_FragCoord.xy);

  gl_FragColor = vec4(col, 1.0);
}
`

function createShader(glCtx: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = glCtx.createShader(type)
  if (!shader) return null
  glCtx.shaderSource(shader, source)
  glCtx.compileShader(shader)
  if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
    console.error('Shader compile error:', glCtx.getShaderInfoLog(shader))
    glCtx.deleteShader(shader)
    return null
  }
  return shader
}

function createProgram(glCtx: WebGLRenderingContext, vs: WebGLShader, fs: WebGLShader): WebGLProgram | null {
  const prog = glCtx.createProgram()
  if (!prog) return null
  glCtx.attachShader(prog, vs)
  glCtx.attachShader(prog, fs)
  glCtx.linkProgram(prog)
  if (!glCtx.getProgramParameter(prog, glCtx.LINK_STATUS)) {
    console.error('Program link error:', glCtx.getProgramInfoLog(prog))
    glCtx.deleteProgram(prog)
    return null
  }
  return prog
}

function init(): boolean {
  const canvas = canvasRef.value
  if (!canvas) return false

  gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null
  if (!gl) {
    console.error('WebGL not supported on this device')
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
  const width = canvas.clientWidth || window.innerWidth || 300
  const height = canvas.clientHeight || window.innerHeight || 150

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
  // Give layout a frame to calculate clientWidth/Height on mobile browsers
  requestAnimationFrame(() => {
    if (init()) {
      render()
    }
  })
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
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
  display: block;
}
</style>
