<script setup lang="ts">
import { skills } from '~/data/skills'
</script>

<template>
  <section id="skills" class="py-32 bg-black">
    <UContainer>
      <p class="text-sm tracking-widest uppercase text-gray-500 mb-4">
        Expertise
      </p>
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-white">
        Skills
      </h2>

      <div class="grid md:grid-cols-3 gap-16">
        <div>
          <h3 class="text-sm tracking-widest uppercase text-gray-500 mb-6">
            Languages
          </h3>
          <ul class="space-y-3">
            <li
              v-for="s in skills.languages"
              :key="s"
              class="text-lg text-white"
            >
              {{ s }}
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm tracking-widest uppercase text-gray-500 mb-6">
            Frameworks
          </h3>
          <ul class="space-y-3">
            <li
              v-for="s in skills.frameworks"
              :key="s"
              class="text-lg text-white"
            >
              {{ s }}
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm tracking-widest uppercase text-gray-500 mb-6">
            Tools
          </h3>
          <ul class="space-y-3">
            <li
              v-for="s in skills.tools"
              :key="s"
              class="text-lg text-white"
            >
              {{ s }}
            </li>
          </ul>
        </div>
      </div>
    </UContainer>
  </section>
</template>
