/**
 * @des 接口列表主模块
 */

import hostEnv from './host-env'

let homeApi = {
  getIndex: 'getIndex',
  getDetail: 'detail'
}

for (let val in homeApi) {
  homeApi[val] = `${hostEnv}${homeApi[val]}`
}

export default homeApi
