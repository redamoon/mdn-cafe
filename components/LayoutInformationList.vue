<template>
  <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5">
    <a :href="`/information/${id}/`" class="block px-4 py-3">
      <time class="text-gray-700 text-base mb-1 block md:w-1/6">
        {{ $formatDate(date) }}
      </time>
      <div class="md:w-10/12">
        {{ title }}
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  date: string,
  id: string
}
const { $formatDate } = useNuxtApp()
defineProps<Props>()
</script>
