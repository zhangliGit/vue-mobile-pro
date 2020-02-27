/**
 * @description 封装http请求功能
 * @author zhangli
 */

import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

// 请求超时时间
axios.defaults.timeout = 15000
axios.defaults.withCredentials = true // 让ajax携带cookie

// 拦截请求
axios.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 拦截响应
axios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

const showToast = (tip = '') => {
  Vue.prototype.$toast.loading({
    mask: false,
    message: tip,
    duration: 0
  })
}

// 处理响应结果
function responseRes(res) {
  Vue.prototype.$toast.clear()
  return new Promise((resolve, reject) => {
    if (res.code === 200 || res.status === true) {
      resolve(res)
    } else {
      reject(res)
      Vue.prototype.$toast.fail(res.message || '请求失败')
    }
  })
}
const $ajax = {
  async get(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await axios.get(obj.url, {
        params: obj.params || ''
      })
      res = res.data
      return responseRes(res)
    } catch (err) {
      return responseRes(err.response.data)
    }
  },
  async postForm(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await axios.post(obj.url, qs.stringify(obj.params))
      res = res.data
      return responseRes(res)
    } catch (err) {
      return responseRes(err.response.data)
    }
  },
  async post(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await axios({
        url: obj.url,
        method: 'post',
        data: obj.params,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      res = res.data
      return responseRes(res)
    } catch (err) {
      return responseRes(err.response.data)
    }
  },
  async postQuery(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await axios({
        url: obj.url,
        method: 'post',
        data: JSON.stringify(obj.params),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      res = res.data
      return responseRes(res)
    } catch (err) {
      return responseRes(err.response.data)
    }
  },
  async getWithPara(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await axios({
        url: obj.url + obj.params,
        method: 'get'
      })
      res = res.data
      return responseRes(res)
    } catch (err) {
      return responseRes(err.response.data)
    }
  }
}

export default $ajax
