/**
 * @des 接口列表主模块
 */

import hostEnv from '@config/index'

var getDetail = Symbol('getDetail')

let homeApi = {
  getIndex: 'getIndex',
  getDetail: 'detail'
}

for (let val in homeApi) {
  homeApi[val] = `${hostEnv}${homeApi[val]}`
}

export default homeApi
