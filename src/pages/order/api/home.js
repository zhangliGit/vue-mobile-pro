/**
 * @description 接口列表主模块
 * @params get, getUrl(参数直接拼接在url斜杠后面), post(JSON数据提交), postForm(表单数据提交)
 * @params false: 请求没有加载提示，默认有
 */
import hostEnv from '@config'
let homeApi = {
  addOrder: '/addOrder#post', // 新增订单
  getOrderList: '/searchOrder#get', // 查询订单
  getOrderMenu: '/orderMenu#get', // 查看今日菜单
  delOrder: '/delOrder#post' // 删除订单
}

for (let val in homeApi) {
  homeApi[val] = `${hostEnv}${homeApi[val]}`
}

export default homeApi
