import Vue from 'vue'
import App from './App.vue'
import '@a/js/rem.js'
import '@a/css/qui-base.css'

const attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

new Vue({
  render: h => h(App)
}).$mount('#app')
