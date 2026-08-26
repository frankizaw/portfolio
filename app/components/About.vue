<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { translations } from '~/data/translations'

const { locale } = useI18n()
const t = computed(() => translations[locale.value].about)
</script>

<template>
  <section id="about" class="py-32 bg-black border-t border-gray-900">
    <UContainer>
      <div class="grid lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5">
          <p class="text-sm tracking-widest uppercase text-gray-500 mb-4">
            {{ t.tag }}
          </p>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {{ t.title }}
          </h2>
          <div class="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>{{ t.p1 }}</p>
            <p>{{ t.p2 }}</p>
          </div>
        </div>

        <div class="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          <div class="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
            <p class="text-xs uppercase tracking-widest text-gray-500 mb-2">{{ t.cards.roleLabel }}</p>
            <h3 class="text-lg md:text-xl font-semibold text-white mb-1">{{ t.cards.roleTitle }}</h3>
            <p class="text-sm text-gray-400">{{ t.cards.roleCompany }}</p>
            <p class="text-xs text-gray-500 mt-3 leading-relaxed">{{ t.cards.roleDesc }}</p>
          </div>

          <div class="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
            <p class="text-xs uppercase tracking-widest text-gray-500 mb-2">{{ t.cards.eduLabel }}</p>
            <h3 class="text-lg md:text-xl font-semibold text-white mb-1">{{ t.cards.eduTitle }}</h3>
            <p class="text-sm text-gray-400">{{ t.cards.eduSchool }}</p>
            <p class="text-xs text-gray-500 mt-3 leading-relaxed">{{ t.cards.eduDesc }}</p>
          </div>

          <div class="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
            <p class="text-xs uppercase tracking-widest text-gray-500 mb-2">{{ t.cards.focusLabel }}</p>
            <h3 class="text-lg md:text-xl font-semibold text-white mb-1">{{ t.cards.focusTitle }}</h3>
            <p class="text-sm text-gray-400">{{ t.cards.focusSub }}</p>
            <p class="text-xs text-gray-500 mt-3 leading-relaxed">{{ t.cards.focusDesc }}</p>
          </div>

          <div class="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
            <p class="text-xs uppercase tracking-widest text-gray-500 mb-2">{{ t.cards.langLabel }}</p>
            <h3 class="text-lg md:text-xl font-semibold text-white mb-1">{{ t.cards.langTitle }}</h3>
            <p class="text-sm text-gray-400">{{ t.cards.langSub }}</p>
            <p class="text-xs text-gray-500 mt-3 leading-relaxed">{{ t.cards.langDesc }}</p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
