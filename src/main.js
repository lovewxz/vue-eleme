import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from 'components/goods/goods'
import seller from 'components/seller/seller'
import ratings from 'components/ratings/ratings'
import Resource from 'vue-resource'

import 'common/scss/index.scss'

Vue.use(Resource)
Vue.use(VueRouter)

let app = Vue.extend(App)
let router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/goods': {
    component: goods
  },
  '/seller': {
    component: seller
  },
  '/ratings': {
    component: ratings
  }
})

router.start(app, '#app')
router.go('/goods')
