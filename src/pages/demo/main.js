import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ajax from '@u/ajax-serve'
import '@u/filters.js'
import '@u/directives.js'
import '@u/rem.js'
import '@a/css/qui-base.css'
import '@a/css/vant-reset.less'
import '@a/js/vant-plugin.js'


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
