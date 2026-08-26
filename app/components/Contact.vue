<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { translations } from '~/data/translations'

const { locale } = useI18n()
const t = computed(() => translations[locale.value].contact)
</script>

<template>
  <section id="contact" class="py-32 bg-black border-t border-gray-900">
    <UContainer>
      <p class="text-sm tracking-widest uppercase text-gray-500 mb-4">
        {{ t.tag }}
      </p>
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">
        {{ t.title }}
      </h2>

      <p class="text-xl text-gray-400 max-w-xl mb-12">
        {{ t.description }}
      </p>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <a
          href="mailto:franek.zawadzki@gmail.com"
          class="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all group"
        >
          <p class="text-xs uppercase tracking-widest text-gray-500 mb-2">{{ t.email }}</p>
          <p class="text-sm md:text-base font-medium text-white group-hover:underline underline-offset-4 break-all">
            franek.zawadzki@gmail.com
          </p>
        </a>

        <a
          href="tel:+48733407455"
          class="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all group"
        >
          <p class="text-xs uppercase tracking-widest text-gray-500 mb-2">{{ t.phone }}</p>
          <p class="text-sm md:text-base font-medium text-white group-hover:underline underline-offset-4">
            +48 733 407 455
          </p>
        </a>

        <a
          href="https://github.com/frankizaw"
          target="_blank"
          class="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all group"
        >
          <p class="text-xs uppercase tracking-widest text-gray-500 mb-2">{{ t.github }}</p>
          <p class="text-sm md:text-base font-medium text-white group-hover:underline underline-offset-4">
            github.com/frankizaw
          </p>
        </a>

        <div
          class="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80"
        >
          <p class="text-xs uppercase tracking-widest text-gray-500 mb-2">{{ t.location }}</p>
          <p class="text-sm md:text-base font-medium text-white">
            {{ t.locationVal }}
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
