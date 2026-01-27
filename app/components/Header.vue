<script setup lang="ts">
const links = [
  { label: 'Work', to: '#projects' },
  { label: 'Skills', to: '#skills' },
  { label: 'Contact', to: '#contact' }
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md">
    <UContainer>
      <nav class="flex items-center justify-between h-16">
        <a href="#" class="text-sm font-semibold tracking-tight text-white">
          FZ.
        </a>

        <ul class="flex items-center gap-8">
          <li v-for="link in links" :key="link.to">
            <a
              :href="link.to"
              class="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </UContainer>
  </header>
</template>
