/**
 * @description 接口列表主模块
 * @remark 接口路径后面加#{类型} 如 #post  #get #del
 */

import hostEnv from '@config/index'


let homeApi = {
  getIndex: '/approve/mobile/apply/leave/commit/list#get#false', // 获取列表
  getDetail: '/approve/mobile/apply/leave/saveorupdate#post' // 获取详情
}

for (let val in homeApi) {
  homeApi[val] = `${hostEnv}${homeApi[val]}`
}

export default homeApi
