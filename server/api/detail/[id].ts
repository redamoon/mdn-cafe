import { ConfigType } from "~/types/microcms"

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig() as ConfigType
  return await $fetch(`${config.public.apiUrl}/information/${event.context.params.id}`, {
    headers: { "X-MICROCMS-API-KEY": config.apiKey },
  })
})
