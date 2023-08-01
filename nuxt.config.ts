const { API_BASE_URL, API_KEY } = process.env
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    apiKey: API_KEY,
    public: {
      apiUrl: API_BASE_URL,
    },
  },
})
