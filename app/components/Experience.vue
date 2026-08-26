<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { translations } from '~/data/translations'

const { locale } = useI18n()
const t = computed(() => translations[locale.value].experience)
</script>

<template>
  <section id="experience" class="py-32 bg-black border-t border-gray-900">
    <UContainer>
      <p class="text-sm tracking-widest uppercase text-gray-500 mb-4">
        {{ t.tag }}
      </p>
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
        {{ t.title }}
      </h2>

      <div class="space-y-16">
        <!-- Work Experience -->
        <div class="space-y-12">
          <article
            v-for="(exp, index) in t.jobs"
            :key="exp.company"
            class="group"
          >
            <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 pb-4 border-b border-gray-800">
              <div class="flex items-baseline gap-4">
                <span class="text-sm text-gray-600">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <div>
                  <h3 class="text-2xl md:text-3xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                    {{ exp.role }}
                  </h3>
                  <p class="text-gray-400 font-medium mt-1">
                    {{ exp.company }}
                  </p>
                </div>
              </div>

              <div class="text-sm text-gray-500 font-mono">
                {{ exp.period }}
              </div>
            </div>

            <div class="mt-6 md:pl-10">
              <ul class="space-y-2 mb-6">
                <li
                  v-for="(bullet, bIdx) in exp.bullets"
                  :key="bIdx"
                  class="text-gray-400 text-base flex items-start gap-3"
                >
                  <span class="text-gray-600 mt-1.5">•</span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>

              <div v-if="exp.skills && exp.skills.length" class="flex flex-wrap gap-2">
                <span
                  v-for="s in exp.skills"
                  :key="s"
                  class="px-2.5 py-1 text-xs rounded-full bg-neutral-900 text-gray-400 border border-neutral-800"
                >
                  {{ s }}
                </span>
              </div>
            </div>
          </article>
        </div>

        <!-- Education Subsection -->
        <div class="pt-12 border-t border-gray-800/60">
          <p class="text-sm tracking-widest uppercase text-gray-500 mb-8">
            {{ t.academicTag }}
          </p>

          <div
            v-for="edu in t.education"
            :key="edu.institution"
            class="p-6 md:p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800/80"
          >
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <h3 class="text-xl md:text-2xl font-semibold text-white">
                  {{ edu.degree }} – {{ edu.field }}
                </h3>
                <p class="text-gray-400 mt-1">
                  {{ edu.institution }}
                </p>
              </div>
              <span class="text-sm text-gray-500 font-mono">
                {{ edu.period }}
              </span>
            </div>

            <p v-if="edu.details" class="text-sm text-gray-400 mt-4 leading-relaxed">
              {{ edu.details }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
