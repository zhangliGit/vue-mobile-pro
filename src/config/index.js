/**
 * @description 多环境接口配置
 * @author zhangli
 */

const ConfigEnv = process.env.VUE_APP_URL
let hostEnv = ''

if (ConfigEnv === 'test') {
  hostEnv = 'wx9396effa73d18044'
} else if (ConfigEnv === 'prod') {
  hostEnv = 'http://prod'
} else {
  hostEnv = 'http://192.168.2.247:3000/mock/40/'
}

export default hostEnv
