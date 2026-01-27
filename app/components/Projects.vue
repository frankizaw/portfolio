<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <section id="projects" class="py-32 bg-black">
    <UContainer>
      <p class="text-sm tracking-widest uppercase text-gray-500 mb-4">
        Selected Work
      </p>
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-white">
        Projects
      </h2>

      <div class="space-y-16">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="group"
        >
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-8 border-b border-gray-800">
            <div class="flex items-baseline gap-4">
              <span class="text-sm text-gray-600">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <h3 class="text-2xl md:text-3xl font-semibold text-white group-hover:text-gray-400 transition-colors">
                {{ project.title }}
              </h3>
            </div>

            <div class="flex items-center gap-6">
              <div class="flex gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="text-xs text-gray-500"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="flex gap-3">
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  class="text-sm text-white underline underline-offset-4 hover:text-gray-400 transition-colors"
                >
                  Live
                </a>
                <a
                  :href="project.github"
                  target="_blank"
                  class="text-sm text-white underline underline-offset-4 hover:text-gray-400 transition-colors"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          <p class="text-gray-400 mt-4 max-w-2xl">
            {{ project.description }}
          </p>
        </article>
      </div>
    </UContainer>
  </section>
</template>
