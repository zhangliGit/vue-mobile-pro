import apiList from '../../api/index.js'
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
  actions[key] = async function({ commit, state }, params = {}) {
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
    setVuex(
      {
        commit
      },
      key,
      res
    )
    return resultBack(res)
  }
}
/**
 * @description 本地存储值，以模块为单位存储，避免模块之间的存储冲突
 */
const localData = window.localStorage.getItem('home') || '{}'
const getState = (state, val) => {
  return JSON.parse(localData)[state] || val
}
const qui = {
  namespaced: true,
  state: {
    dataList: getState('dataList', [])
  },
  actions: {
    ...actions
  },
  mutations: {
    /**
     * @description 设置state值
     * @param { key } state属性
     * @param { data } 存在的数据
     */
    updateData(state, { key, data, isLocal = true }) {
      if (isLocal) {
        const quiData = JSON.parse(localStorage.getItem('qui') || '{}')
        quiData[key] = data
        window.localStorage.setItem('qui', JSON.stringify(quiData))
      }
      state[key] = data
    }
  }
}

/**
 * @description 存在vuex数据到本地
 * @param {path} 请求的url路径，需要在哪些请求里面进行设置
 * @param {res} 处理的数据
 * @param remark 同样可以在请求成功后的then方法里面调用setData存储全局状态
 */

const setVuex = function({ commit }, path, res) {
  if (path === 'getIndex') {
  }
}

export default qui
