<template>
<div id="app">
  <e-header :seller="seller"></e-header>
  <tab :link="link"></tab>
  <router-view></router-view>
</div>
</template>

<script>
import axios from 'axios'
import Tab from '@/base/tab/tab'
import eHeader from '@/components/eheader/eheader'
import {ERR_OK} from '@/config/config'

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
      ],
      seller: {}
    }
  },
  created() {
    axios.get('/api/seller').then(res => {
      const response = res.data
      if (response.errno === ERR_OK) {
        this.seller = response.res
        console.log(this.seller)
      }
    })
  },
  components: {
    Tab,
    eHeader
  }
}
</script>

<style>

</style>
