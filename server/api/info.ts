export default eventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { limit } = useQuery(event)
  const q = event ? `?limit=${limit}` : ""
  return await $fetch(`${config.public.apiUrl}/information${q}`, {
    headers: { "X-MICROCMS-API-KEY": config.public.apiKey },
  })
})
