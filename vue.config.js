const utils = require('./build/utils')
const path = require('path')
const customTheme = require('./vant-custom-theme')
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
      .set('@p', resolve('src/pages'))
      .set('@a', resolve('src/assets'))
      .set('@c', resolve('src/components'))
      .set('@config', resolve('src/config/'))
      .set('@u', resolve('src/utils'))
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
      // 压缩代码
      config.optimization = {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_console: true
              }
            }
          })
        ]
      }
    }
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      less: {
        modifyVars: customTheme.theme
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: customTheme.theme
      }
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
