const  CONFIG_ENV = process.env.VUE_APP_URL
let hostUrl = ''

if (CONFIG_ENV === 'test') {
  hostUrl = 'http://testing'
}  else if (CONFIG_ENV === 'prod') {
  hostUrl = 'http://production'
} else {
  hostUrl = 'http://development'
}

export default hostUrl