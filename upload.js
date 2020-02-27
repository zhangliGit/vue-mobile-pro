/**
 *
 * @Description 压缩文件后上传服务器
 * @Author 张立
 * @Created 2019-06-21
 *
 */
const request = require('request')
const path = require('path')
const fs = require('fs')
const AdmZip = require('adm-zip')
var zip = new AdmZip()
const buildModule = process.argv[process.argv.length - 1]
if (buildModule.indexOf('upload.js') > -1) {
  console.log('请输入上传模块')
  process.exit(1)
}
zip.addLocalFolder('dist')
zip.writeZip(`${buildModule}.zip`)
console.log(path.resolve(__dirname, `${buildModule}.zip`))
console.log('\x1b[32m', '*************************************', '\n')
console.log('\x1b[32m', `你正在上传${buildModule}压缩包, 请耐心等待中...`, '\n')
console.log('\x1b[32m', '*************************************', '\n')
let total = 1
let time = setInterval(() => {
  console.log(total++)
}, 1000)
var url = 'http://192.168.2.247:8090/upload'
var formData = {
  file: fs.createReadStream(path.resolve(__dirname, `${buildModule}.zip`))
}
request.post(
  {
    url: url,
    formData: formData
  },
  function(error, response) {
    if (!error && response.statusCode === 200) {
      // 删除压缩包
      fs.unlink(`${buildModule}.zip`, function() {})
      console.log('上传成功')
      clearInterval(time)
    }
  }
)
