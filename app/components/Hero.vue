<script setup lang="ts">
import { ref, onMounted } from 'vue'

const show = ref(false)
const showTagline = ref(false)
const showButtons = ref(false)

onMounted(() => {
  setTimeout(() => show.value = true, 100)
  setTimeout(() => showTagline.value = true, 600)
  setTimeout(() => showButtons.value = true, 1000)
})
</script>

<template>
  <section class="hero">
    <ClientOnly>
      <DitherBackground
        :wave-speed="0.03"
        :wave-frequency="2.5"
        :wave-amplitude="0.25"
        :wave-color="[0.35, 0.35, 0.4]"
        :color-num="4"
        :pixel-size="2"
      />
    </ClientOnly>

    <div class="hero-overlay" />

    <UContainer class="hero-content">
      <Transition name="fade-up">
        <p v-if="show" class="hero-label">
          Frontend Developer
        </p>
      </Transition>

      <Transition name="fade-up">
        <h1 v-if="show" class="hero-title">
          Franciszek<br>Zawadzki
        </h1>
      </Transition>

      <Transition name="fade-up">
        <p v-if="showTagline" class="hero-tagline">
          Building clean, accessible interfaces with solid web fundamentals.
        </p>
      </Transition>

      <Transition name="fade-up">
        <div v-if="showButtons" class="flex justify-center gap-4">
          <UButton to="#projects" variant="solid" color="white" size="lg">
            View Work
          </UButton>
          <UButton
            to="https://github.com/frankizaw"
            target="_blank"
            variant="outline"
            color="white"
            size="lg"
          >
            GitHub
          </UButton>
        </div>
      </Transition>
    </UContainer>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%);
  z-index: 5;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
}

.hero-label {
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: clamp(2.5rem, 10vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 30px rgba(0,0,0,0.5);
}

.hero-tagline {
  font-size: 1.125rem;
  color: rgba(255,255,255,0.7);
  max-width: 28rem;
  margin: 0 auto 2.5rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.fade-up-enter-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
