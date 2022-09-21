export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  return await $fetch(`${config.public.apiUrl}/information/${event.context.params.id}`, {
    headers: { "X-MICROCMS-API-KEY": config.public.apiKey },
  })
})
