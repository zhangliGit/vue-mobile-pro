const path = require('path')
const utils = require('./build/tool')
const resolve = dir => path.join(__dirname, dir)
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
const isCdn = process.env.VUE_APP_URL === 'prod'
module.exports = {
  publicPath: isProduction ? './' : '/',
  // 多页配置
  pages: {
    ...utils.entries()
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    // 添加别名
    config.resolve.alias
      .set('@s', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@u', resolve('src/utils'))
      .set('@p', resolve('src/pages'))
      .set('@a', resolve('src/assets'))
      .set('@api', resolve('src/api'))
      .set('@config', resolve('src/config'))
  },
  configureWebpack: config => {
    // 配置cdn模块
    if (isProduction && isCdn) {
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
      }
    }
    // 去除调试信息
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log']
            }
          }
        })
      ]
    }
  },
  // 本地访问代理
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://xiaoyueyue.com.cn:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/assets/css/variables.less')
      ]
    })
}