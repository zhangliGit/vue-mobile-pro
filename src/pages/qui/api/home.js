/**
 * @description 接口列表主模块
 * @params get, getUrl(参数直接拼接在url斜杠后面), post(JSON数据提交), postForm(表单数据提交)
 * @params false: 请求没有加载提示，默认有
 */


let homeApi = {
  getIndex: 'http://yapi.demo.qunar.com/mock/9603/getIndex#get', // 获取列表
  getDetail: 'http://yapi.demo.qunar.com/mock/9603/getDetail#get' // 获取详情
}

for (let val in homeApi) {
  homeApi[val] = `${homeApi[val]}`
}

export default homeApi
