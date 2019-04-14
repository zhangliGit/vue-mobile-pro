import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/js/rem.js'
import 'assets/css/qui.css'
import './font/iconfont.css'

import attachFastClick from 'fastclick'
attachFastClick.attach(document.body)

const vm = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")