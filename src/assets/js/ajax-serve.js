/**
 * @description 封装http请求功能
 * @author zhangli
 */

import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

// 请求超时时间
axios.defaults.timeout = 15000

// 拦截请求
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})


// 拦截响应
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

const showToast = (tip = '') => {
  Vue.prototype.$toast.loading({ mask: true, message: tip, duration: 0 })
}
function errorToast (e, type = false) {
  Vue.prototype.$toast.clear()
  Vue.prototype.$toast.fail('请求失败')
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject()
  })
}

// 处理响应结果
function responseRes (res) {
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
  async get (obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await axios.get(obj.url, {
        params: obj.params || ''
      })
      res = res.data
      return responseRes(res)
    } catch (err) {
      errorToast(err)
    }
  },
  async post (obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await axios.post(obj.url, qs.stringify(obj.params))
      res = res.data
      return responseRes(res)
    } catch (err) {
      errorToast(err)
    }
  },
  async postForm (obj, tag = true) {
    try {
      let res = await axios({
        url: obj.url,
        method: 'post',
        data: obj.params,
        transformRequest: [
          function (data) {
            let ret = ''
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                '=' +
                encodeURIComponent(data[it]) +
                '&'
            }
            return ret
          }
        ],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      res = res.data
      return responseRes(res)
    } catch (err) {
      errorToast(err)
    }
  }
}

export default $ajax
