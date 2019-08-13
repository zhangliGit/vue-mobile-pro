
/**
 * @des 注册全局过滤器
 */

import Vue from 'vue'

const filters = {
  setAge: val => {
    return val === 1 ? '男' : '女'
  }
}

for (let key in filters) {
  Vue.filter(key, filters[key])
}
