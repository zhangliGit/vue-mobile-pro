/**
 * @description 接口列表主模块
 * @params get, getUrl(参数直接拼接在url斜杠后面), post(JSON数据提交), postForm(表单数据提交)
 * @params false: 请求没有加载提示，默认有
 */

import hostEnv from '@config/index'


let homeApi = {
  getIndex: '/getIndex#post', // 获取列表
  getDetail: '/detail#get' // 获取详情
}

for (let val in homeApi) {
  homeApi[val] = `${hostEnv}${homeApi[val]}`
}

export default homeApi
