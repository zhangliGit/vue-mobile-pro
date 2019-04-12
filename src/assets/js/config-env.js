const  CONFIG_ENV = process.env.VUE_APP_URL
let hostUrl = ''

if (CONFIG_ENV === 'test') {
  hostUrl = '我是测试环境'
}  else if (CONFIG_ENV === 'prod') {
  hostUrl = '我是正式环境 '
} else {
  hostUrl = '我是开发环境'
}

export default hostUrl