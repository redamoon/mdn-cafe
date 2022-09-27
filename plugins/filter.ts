import { DateTime } from "luxon"
import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      formatDate: (value) => {
        const valueDate = DateTime.fromISO(value)
        return valueDate.toFormat("yyyy.MM.dd")
      },
    },
  }
})
