import apiList from '../../api/index.js'
import $ajax from '@u/ajax-serve'
const localData = window.localStorage.getItem('vuex')

/**
 * @description 处理请求成功后返回Promise方便vue界面处理数据
 * @param {res} 返回结果
 */
function resultBack (res) {
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
  actions[key] = async function ({
    commit,
    state
  }, params = {}) {
    // 是否显示加载提示
    const isLoad = apiList[key].split('#')[2] === undefined
    const res = await $ajax[type]({
      url: url,
      params
    }, isLoad)
    /**
     * @des 数据请求成功后，设置全局vuex属性
     * @param {key} 请求的url路径
     * @param {res} 请求返回的结果
     */
    setVuex({
      commit
    }, key, res)
    return resultBack(res)
  }
}
const home = {
  namespaced: true,
  state: {
    list: localData ? JSON.parse(localData).home.list : ''
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
    setData (state, data) {
      state[data.key] = data.data
    }
  }
}

/**
 * @description 存在vuex数据到本地
 * @param {path} 请求的url路径，需要在哪些请求里面进行设置
 * @param {res} 处理的数据
 * @param remark 同样可以在请求成功后的then方法里面调用setData存储全局状态
 */

const setVuex = function ({
  commit
}, path, res) {
  if (path === 'getIndex') {
    commit('setData', {
      key: 'dataList',
      data: res.data
    })
  }
}

export default home
