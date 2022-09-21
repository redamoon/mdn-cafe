const { API_BASE_URL, API_KEY } = process.env
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  // buildModules: ['@nuxtjs/tailwindcss'],
  css: ["@/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  publicRuntimeConfig: {
    apiUrl: API_BASE_URL,
    apiKey: API_KEY,
  },
})
