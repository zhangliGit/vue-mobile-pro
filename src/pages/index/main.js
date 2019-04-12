import Vue from 'vue';
import App from './App.vue';
import 'assets/js/rem.js'
import 'assets/css/qui.css'

const attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

const vm = new Vue({
  render: h => h(App)
}).$mount("#app")