import { defineNuxtConfig } from '@nuxt/bridge'
const axios = require('axios')

export default defineNuxtConfig({
  ssr: false,
  // runtimeConfig: {
  //   apiKey: process.env.NUXT_API_SECRET,
  //   public: {
  //     apiUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
  //   },
  // },
  target: 'static',
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: 'universal',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  // head: {
  //   titleTemplate(title) {
  //     return (title ? `${title} | ` : '') + process.env.npm_package_name
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: process.env.npm_package_description || '',
  //     },
  //   ],
  //   link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  // },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/filter.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-storm',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    prefix: process.env.API_BASE_URL,
    proxy: true,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  publicRuntimeConfig: {
    apiUrl: process.env.API_BASE_URL,
  },
  privateRuntimeConfig: {
    apiKey: process.env.API_KEY,
  },
  generate: {
    fallback: true,
    routes() {
      const information = axios
        .get(`${process.env.API_BASE_URL}/information`, {
          headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
        })
        .then((res) => {
          return res.data.contents.map((information) => {
            return '/information/' + information.id
          })
        })
      return Promise.all([information]).then((values) => {
        return values.join().split(',')
      })
    },
  },
})
