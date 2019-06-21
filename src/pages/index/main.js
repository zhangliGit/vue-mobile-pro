import Vue from 'vue'
import App from './App.vue'
import '@a/css/qui-base.css'
import '@u/rem.js'

const attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

new Vue({
  render: h => h(App)
}).$mount('#app')
