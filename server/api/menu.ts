import { ConfigType } from "~/types/microcms"

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig() as unknown as ConfigType
  const { limit, filters } = getQuery(event)
  const q = limit && filters ? `?limit=${limit}&filters=${filters}` : ""
  return await $fetch(`${config.public.apiUrl}/menu${q}`, {
    headers: { "X-MICROCMS-API-KEY": config.apiKey },
  })
})
