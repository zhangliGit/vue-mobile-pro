import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ajax from '@u/ajax-serve'
import tools from '@u/tools'
import '@u/filters.js'
import '@u/directives.js'
import '@u/rem.js'
import '@a/css/qui-base.css'
import '@a/css/global.less'
import '@a/js/vant-plugin.js'

import attachFastClick from 'fastclick'
attachFastClick.attach(document.body)
/**
 * @description 处理fastClick导出文本输入框点击不灵敏bug
 */
attachFastClick.prototype.focus = function(targetElement) {
  let length
  if (
    targetElement.setSelectionRange &&
    targetElement.type.indexOf('date') !== 0 &&
    targetElement.type !== 'time' &&
    targetElement.type !== 'month'
  ) {
    length = targetElement.value.length
    targetElement.focus()
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  }
}

Vue.prototype.$ajax = $ajax
Vue.prototype.$tools = tools
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
