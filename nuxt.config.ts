// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    viewer: false,
  },
  vueuse: {
    ssrHandlers: true,
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Matt Fletcher' },
        { name: 'theme-color', content: '#000000' },
      ],
    },
    rootId: 'app',
  },
  components: {},
})
