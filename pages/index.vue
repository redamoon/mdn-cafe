<template>
  <layout-wrapper>
    <layout-visual
      title="NUXT SMAPLE SITE DEMO"
      message="お知らせやメニューをmicroCMSを導入したDEMOサイトになります。"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <base-heading> MdN Cafeのおすすめメニュー </base-heading>
      <div class="flex flex-wrap justify-between mb-20 md:mb-0">
        <layout-menu-list
          v-for="(item, index) in menuItems"
          :key="index"
          :image="item.image"
          :image-url="item.image.url"
          :name="item.name"
          :body="item.body"
          :price="item.price"
          item-class="md:w-56 mb-20 shadow-lg bg-gray-200"
          block-class="max-w"
          image-class="w-full"
          data-class="px-6 py-4"
          :flag-body="false"
        />
      </div>
      <base-button name="メニューの一覧" link="/menu" />
      <base-heading>MdN Cafeのお知らせ</base-heading>
      <div class="mb-20">
        <layout-information-list
          v-for="(item, index) in infoItems"
          :id="item.id"
          :key="index"
          :date="item.date"
          :title="item.title"
        />
      </div>
      <base-button name="お知らせ一覧" link="/information" />
    </div>
  </layout-wrapper>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ $config }) {
    // const info = await fetch(
    //   `https://vue-mdn-corporate.microcms.io/api/v1/information?limit=3`,
    //   {
    //     headers: {
    //       'X-MICROCMS-API-KEY': '849021d65e784f58a1af5c6d4839037c4c19',
    //     },
    //   }
    // )
    // const menu = await fetch(
    //   `https://vue-mdn-corporate.microcms.io/api/v1/menu?limit=3&filters=flag[equals]true`,
    //   {
    //     headers: {
    //       'X-MICROCMS-API-KEY': '849021d65e784f58a1af5c6d4839037c4c19',
    //     },
    //   }
    // ).then((res) => res.json())
    console.log($config)
    const info = await axios.get(
      `https://vue-mdn-corporate.microcms.io/api/v1/information?limit=3`,
      {
        headers: {
          'X-MICROCMS-API-KEY': '849021d65e784f58a1af5c6d4839037c4c19',
        },
      }
    )
    const menu = await axios.get(
      `https://vue-mdn-corporate.microcms.io/api/v1/menu?limit=3&filters=flag[equals]true`,
      {
        headers: {
          'X-MICROCMS-API-KEY': '849021d65e784f58a1af5c6d4839037c4c19',
        },
      }
    )
    return {
      infoItems: info.data.contents,
      menuItems: menu.data.contents,
    }
  },
}
</script>
