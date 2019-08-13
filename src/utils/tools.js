/**
 * @description 常用工具函数
 */
import Vue from 'vue'
const vm = new Vue({})
const tools = {
// 延迟处理方法
  goNext: fn => {
    setTimeout(() => {
      fn()
    }, 1200)
  },
  // confirm确定框
  delTip: (message, fn) => {
    vm.$dialog.confirm({
      title: '温馨提示',
      message: message
    }).then(() => {
      if (fn) fn()
    }).catch(() => {})
  }
}

export default tools

