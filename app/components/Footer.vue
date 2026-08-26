<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { translations } from '~/data/translations'

const { locale } = useI18n()
const t = computed(() => translations[locale.value].footer)
</script>

<template>
  <footer class="py-8 bg-black border-t border-gray-900">
    <UContainer>
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500">
          {{ t.copyright }}
        </p>
        <p class="text-sm text-gray-500">
          {{ t.builtWith }}
        </p>
      </div>
    </UContainer>
  </footer>
</template>
