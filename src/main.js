
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@css/common.less'
import '@css/flex.less'

import attachFastClick from 'fastclick'
require('@css/reset.less')
attachFastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
