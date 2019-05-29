/**
 * @description 多环境接口配置
 * @author zhangli
 */

const ConfigEnv = process.env.VUE_APP_URL
let hostEnv = ''
let wxAppid = ''

if (ConfigEnv === 'test') {
  hostEnv = 'http://test'
  wxAppid = 'wx9396effa73d18044'
} else if (ConfigEnv === 'prod') {
  hostEnv = 'http://prod'
  wxAppid = 'wxdd9d4d007230f991'
} else {
  wxAppid = 'wx9396effa73d18044'
  hostEnv = 'http://192.168.2.247:3000/mock/40/'
}

export const WeChatAppid = wxAppid
export default hostEnv

