<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { translations } from '~/data/translations'

const { locale } = useI18n()
const t = computed(() => translations[locale.value].skills)
</script>

<template>
  <section id="skills" class="py-32 bg-black border-t border-gray-900">
    <UContainer>
      <p class="text-sm tracking-widest uppercase text-gray-500 mb-4">
        {{ t.tag }}
      </p>
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-white">
        {{ t.title }}
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Frontend -->
        <div>
          <h3 class="text-sm tracking-widest uppercase text-gray-400 mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
            {{ t.categories.frontend }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="s in t.frontendList"
              :key="s"
              class="text-base text-gray-300"
            >
              {{ s }}
            </li>
          </ul>
        </div>

        <!-- Systems & IT -->
        <div>
          <h3 class="text-sm tracking-widest uppercase text-gray-400 mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
            {{ t.categories.systems }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="s in t.systemsList"
              :key="s"
              class="text-base text-gray-300"
            >
              {{ s }}
            </li>
          </ul>
        </div>

        <!-- Tools & Design -->
        <div>
          <h3 class="text-sm tracking-widest uppercase text-gray-400 mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
            {{ t.categories.tools }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="s in t.toolsList"
              :key="s"
              class="text-base text-gray-300"
            >
              {{ s }}
            </li>
          </ul>
        </div>

        <!-- Languages -->
        <div>
          <h3 class="text-sm tracking-widest uppercase text-gray-400 mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
            {{ t.categories.languages }}
          </h3>
          <ul class="space-y-4">
            <li
              v-for="lang in t.languagesList"
              :key="lang.name"
              class="flex flex-col"
            >
              <span class="text-base text-white font-medium">{{ lang.name }}</span>
              <span class="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{{ lang.level }}</span>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>
  </section>
</template>
