
/**
 * @des 首页数据管理模块
 * @author zhangli
 * @date 2019-05-29
 */

import homeApi from '@a/config/home.js'
import $ajax from '@a/js/ajax-serve'

/**
 * @description 处理请求成功后返回Promise方便vue界面处理数据
 * @param {res} 返回结果
 */
function resultBack (res) {
  return new Promise(resolve => {
    resolve(res)
  })
}
const HOME = {
  namespaced: true,
  state: {
    indexList: []
  },
  actions: {
    /**
     * @des 首页列表
     */
    async getIndex ({ commit, state }, params = {}) {
      let res = await $ajax.post({
        url: homeApi.getIndex,
        params
      })
      commit('setData', { key: 'indexList', data: res.data })
    },
    /**
     * @des 详情页
     */
    async getDetail ({ commit, state }, params = {}) {
      let res = await $ajax.get({
        url: homeApi.getDetail,
        params
      })
      return resultBack(res.data)
    }
  },
  mutations: {
    setData (state, { key, data }) {
      state[key] = data
    }
  }

}

export default HOME
