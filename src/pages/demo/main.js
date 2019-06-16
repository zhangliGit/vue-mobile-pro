import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ajax from '@a/js/ajax-serve'
import './utils/filters'
import './utils/directives'
import '@a/js/rem.js'
import '@a/css/qui-base.css'
import '@a/js/vant-plugin.js'
import './assets/css/vant-reset.less'


import attachFastClick from 'fastclick'
attachFastClick.attach(document.body)

Vue.prototype.$ajax = $ajax

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
router.afterEach((to, from) => {
})
