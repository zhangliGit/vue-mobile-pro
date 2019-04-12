
const webpack = require('webpack')
const utils = require('./build/utils')
const path = require('path')
const vuxLoader = require('vux-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const resolve = (dir) => path.join(__dirname, dir)
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isProduction
    ? './'
    : '/',
  // 是否在生产环境构建sourceMap 
  productionSourceMap: false,
  // 配置多页面
  pages: {
    ...utils.entries()
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
     .set('@', resolve('src'))
     .set('@c', resolve('src/components/common'))
     .set('assets', resolve('src/assets'))
  },
  configureWebpack: config => {
    // 配置vux
    vuxLoader.merge(config, {
        options: {},
        plugins: ['vux-ui']
    })
    // 配置cdn模块
    config.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios'
    }
    // 压缩代码
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: false,
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
    port: 8089,
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
    },
    before: app => {}
  },
}