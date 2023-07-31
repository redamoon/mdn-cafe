import { DateTime } from "luxon"
import { defineNuxtPlugin } from "#app"

type FormatDate = string

export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      formatDate: (value: FormatDate) => {
        const valueDate = DateTime.fromISO(value)
        return valueDate.toFormat("yyyy.MM.dd")
      },
    },
  }
})
