import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@a/js/rem.js'
import '@a/css/qui-base.css'

import attachFastClick from 'fastclick'
attachFastClick.attach(document.body)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, form, next) => {
  document.title = to.meta.title
  next()
})
router.afterEach((to, from) => {
})
