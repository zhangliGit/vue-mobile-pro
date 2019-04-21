/**
 * @description 多环境接口配置
 * @author zhangli
 */

const ConfigEnv = process.env.VUE_APP_URL
let hostEnv = ''

if (ConfigEnv === 'test') {
  hostEnv = 'http://yapi.demo.qunar.com/mock/62776/test/'
} else if (ConfigEnv === 'prod') {
  hostEnv = 'http://yapi.demo.qunar.com/mock/62776/prod/'
} else {
  hostEnv = 'http://yapi.demo.qunar.com/mock/62776/dev/'
}

export default hostEnv
