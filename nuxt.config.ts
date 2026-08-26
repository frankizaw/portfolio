export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      allowedHosts: true
    }
  }
})
