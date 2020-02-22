'use strict'
const path = require('path')
const pagePath = path.resolve(__dirname, '../src/pages')
const glob = require('glob')
const modulesDir = glob.sync(pagePath + '/*')
const buildModule = process.argv[process.argv.length - 1]
let pageList = []
modulesDir.forEach(file => {
  pageList.push(file.split('/')[file.split('/').length - 1])
})

// 打包信息
if (process.env.NODE_ENV === 'production') {
  console.log('\x1b[32m', '*************************************', '\n')
  if (pageList.indexOf(buildModule) > -1) {
    console.info(' 正在打包pages目录下 ' + buildModule + ' 应用模块', '\n')
    pageList = [buildModule]
  } else {
    console.info(' 正在打包pages目录下所有应用模块', '\n')
  }
  console.log(' 打包环境：', process.env.VUE_APP_URL || 'dev', '\n')
  console.log('\x1b[32m', '**************************************', '\n')
}

// cdn配置
const cdn = [
  'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
  'https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js',
  'https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js',
  'https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js'
]
// 多页面配置
exports.entries = function() {
  let entries = {}
  pageList.forEach(pageDir => {
    entries[pageDir] = {
      // 入口文件
      entry: `src/pages/${pageDir}/main.js`,
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: `${pageList.length === 1 ? 'index' : pageDir}.html`,
      // 界面标题配置
      title: '',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk
      cdnConfig: process.env.NODE_ENV === 'production' && process.env.VUE_APP_URL === 'prod' ? cdn : [],
      chunks: ['chunk-vendors', 'chunk-common', pageDir]
    }
  })
  return entries
}
