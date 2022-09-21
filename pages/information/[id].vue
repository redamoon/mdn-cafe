<template>
  <layout-wrapper>
    <layout-visual title="Information" :height="40" visual="visual-information" />
    <div class="w-full md:max-w-3xl mx-auto pt-20">
      <h2 class="text-xl pb-5 border-b border-gray-500 border-solid font-bold">
        {{ data.title }}
      </h2>
      <div class="pt-4 mb-4">
        <time class="text-gray-700 text-base">
          {{ $formatDate(data.date) }}
        </time>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html-->
      <div class="mb-20" v-html="data.body"></div>
      <base-button name="お知らせへ戻る" link="/information/" />
    </div>
  </layout-wrapper>
</template>

<script setup lang="ts">
const { $formatDate } = useNuxtApp()
const route = useRoute()
const { data } = await useFetch(`/api/detail/${route.params.id}`)
// script内で使用するときは.valueが必要
useHead({
  title: data.value.title
})
</script>
