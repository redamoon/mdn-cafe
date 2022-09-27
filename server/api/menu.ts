export default eventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { limit, filters } = useQuery(event)
  const q = limit && filters ? `?limit=${limit}&filters=${filters}` : ""
  return await $fetch(`${config.public.apiUrl}/menu${q}`, {
    headers: { "X-MICROCMS-API-KEY": config.public.apiKey },
  })
})
