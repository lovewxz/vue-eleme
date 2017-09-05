<template>
<div id="app">
  <tab :link="link"></tab>
  <router-view></router-view>
</div>
</template>

<script>
import Tab from '@/base/tab/tab'

export default {
  data() {
    return {
      link: [
        {
          name: '商品',
          url: '/goods'
        },
        {
          name: '评论',
          url: '/ratings'
        },
        {
          name: '商家',
          url: '/seller'
        }
      ]
    }
  },
  components: {
    Tab
  }
}
</script>

<style>

</style>
