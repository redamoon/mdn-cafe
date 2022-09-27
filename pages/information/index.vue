<template>
  <layout-wrapper>
    <layout-visual :height="40" title="Information" visual="visual-information" />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <div class="mb-20">
        <layout-information-list
          v-for="(item, index) in items.contents"
          :id="item.id"
          :key="index"
          :date="item.date"
          :title="item.title"
        />
      </div>
      <base-button name="トップへ戻る" link="/" />
    </div>
  </layout-wrapper>
</template>

<script setup lang="ts">
const { data: items } = await useFetch("/api/info")
useHead({
  title: 'お知らせ',
})
</script>
