<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { translations } from '~/data/translations'

const { locale, setLocale } = useI18n()
const t = computed(() => translations[locale.value].nav)

const links = computed(() => [
  { label: t.value.about, to: '#about' },
  { label: t.value.experience, to: '#experience' },
  { label: t.value.projects, to: '#projects' },
  { label: t.value.skills, to: '#skills' },
  { label: t.value.contact, to: '#contact' }
])
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
    <UContainer>
      <nav class="flex items-center justify-between h-16">
        <a href="#" class="text-sm font-bold tracking-wider text-white">
          FZ.
        </a>

        <div class="flex items-center gap-6 md:gap-10">
          <ul class="hidden sm:flex items-center gap-6 md:gap-8">
            <li v-for="link in links" :key="link.to">
              <a
                :href="link.to"
                class="text-xs md:text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>

          <!-- Language Switcher Pill -->
          <div class="flex items-center p-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs">
            <button
              type="button"
              class="px-2.5 py-1 rounded-full font-medium transition-all"
              :class="locale === 'pl' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-white'"
              @click="setLocale('pl')"
            >
              PL
            </button>
            <button
              type="button"
              class="px-2.5 py-1 rounded-full font-medium transition-all"
              :class="locale === 'en' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-white'"
              @click="setLocale('en')"
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </UContainer>
  </header>
</template>
