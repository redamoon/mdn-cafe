import { ConfigType } from "~/types/microcms"

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig() as unknown as ConfigType
  const { limit } = getQuery(event)
  const q = event ? `?limit=${limit}` : ""
  return await $fetch(`${config.public.apiUrl}/information${q}`, {
    headers: { "X-MICROCMS-API-KEY": config.apiKey },
  })
})
