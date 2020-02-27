/**
 * @description 注册全局过滤器
 */

import Vue from 'vue'

const filters = {
  // 示例
  setTime: val => {
    return val.substring(0, 10)
  }
}

for (let key in filters) {
  Vue.filter(key, filters[key])
}
