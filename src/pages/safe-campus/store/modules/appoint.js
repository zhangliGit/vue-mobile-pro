/**
 * @description 预约模块
 */

import $ajax from '@a/js/ajax-serve.js'
import appointApi from '@a/config/api-appoint.js'

const Appoint = {
  namespaced: true,
  state: {
    visitorTypeList: []
  },
  actions: {
    async getVisitorType ({ commit, state }, params) {
      let res = await $ajax.get({
        url: appointApi.visitorType
      })
      commit('setVisitorType', res.data)
    }
  },
  mutations: {
    setVisitorType (state, data) {
      state.visitorTypeList = data
    }
  }
}

export default Appoint
