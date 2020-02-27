import Vue from 'vue'
import apiList from '../api/index.js'
import $ajax from '@u/ajax-serve'
/**
 * @description 处理请求成功后返回Promise方便vue界面处理数据
 * @param {res} 返回结果
 */
function resultBack(res) {
  return new Promise(resolve => {
    resolve(res)
  })
}

// 响应式数据
const projectName = 'demo' // 此处写项目名作为存储值
const localData = window.sessionStorage.getItem(projectName) || '{}'
const getState = (state, val) => {
  return JSON.parse(localData)[state] || val
}
const store = Vue.observable({
  count: getState('count', 1)
})

// 修改数据
const setStore = ({ key, data, isLocal = true }) => {
  if (isLocal) {
    const localData = JSON.parse(sessionStorage.getItem(projectName) || '{}')
    localData[key] = data
    window.sessionStorage.setItem(projectName, JSON.stringify(localData))
  }
  store[key] = data
}

/**
 * @description 当前模块接口列表
 * @param {url} 功能接口
 * @param {type} 请求类型
 * @param {params} 请求参数
 */
const actions = Object.create(null)
for (const key in apiList) {
  const url = apiList[key].split('#')[0]
  const type = apiList[key].split('#')[1]
  actions[key] = async function(params = {}) {
    // 是否显示加载提示
    const isLoad = apiList[key].split('#')[2] === undefined
    let reqType = type === 'getUrl' ? 'get' : type
    const isGetUrl = type === 'getUrl'
    const res = await $ajax[reqType](
      {
        url: isGetUrl || type === 'del' ? url + '/' + params : url,
        params: isGetUrl ? {} : params
      },
      isLoad
    )
    /**
     * @des 数据请求成功后，设置全局vuex属性
     * @param {key} 请求的url路径
     * @param {res} 请求返回的结果
     */
    return resultBack(res)
  }
}

export { store, setStore, actions }
