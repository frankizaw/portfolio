<template>
  <footer class="py-8 bg-black border-t border-gray-800">
    <UContainer>
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} Franciszek Zawadzki
        </p>

        <p class="text-sm text-gray-500">
          Built with Nuxt
        </p>
      </div>
    </UContainer>
  </footer>
</template>
