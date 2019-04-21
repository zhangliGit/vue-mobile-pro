
import axios from 'axios'
import qs from 'qs'

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

const showToast = (tip = '数据加载中') => {
}
function errorToast (e) {
}
const $ajax = {
  async get (obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await axios.get(obj.url, { params: obj.params || '' })
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.code === 200 || res.status === true) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      errorToast(err)
    }
  },
  async post (obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await axios.post(obj.url, qs.stringify(obj.params))
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.code === 200 || res.status === true) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      errorToast(err)
    }
  }
}

export default $ajax
