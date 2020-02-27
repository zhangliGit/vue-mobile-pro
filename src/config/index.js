/**
 * @description 多环境接口配置
 * @author zhangli
 */

const ConfigEnv = process.env.VUE_APP_URL
let hostEnv = ''

if (ConfigEnv === 'test') {
  hostEnv = ''
} else if (ConfigEnv === 'prod') {
  hostEnv = ''
} else {
  hostEnv = ''
}

export default hostEnv
