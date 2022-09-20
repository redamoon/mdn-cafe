import { defineNuxtConfig } from '@nuxt/bridge'
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    API_KEY: process.env.NITRO_API_KEY, // variable that can only be accessed on the server side
    public: {
      BASE_URL: process.env.NITRO_PUBLIC_API_URL, // variable that can also be accessed on the client side
    },
  },
  modules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-storm',
  ],
  components: true,
  target: 'static',
  // すべてのプラグインは自動読み込みのため不要
  // plugins: ['~/plugins/filter.js', '~/plugins/utils.js'],
  // plugins: ['~/plugins/filter.js', '~/plugins/utils.js'],
})
