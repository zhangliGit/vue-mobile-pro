/**
 *
 * @Description 上传组件文件到服务器
 * @Author 张立
 * @Created 2019-08-15
 *
 */
const request = require('request')
const path = require('path')
const fs = require('fs')
const AdmZip = require('adm-zip')
var zip = new AdmZip()
zip.addLocalFolder('src/components/common')
zip.writeZip('qui-component.zip')
console.log('\x1b[32m', '*************************************', '\n')
console.log('\x1b[32m', '你正在上传组件压缩包, 请耐心等待...', '\n')
console.log('\x1b[32m', '*************************************', '\n')
let total = 1
let time = setInterval(() => {
  console.log(total++)
}, 1000)
var url = 'http://192.168.2.247:8090/upload-web'
var formData = {
  file: fs.createReadStream(path.resolve(__dirname, 'qui-component.zip'))
}
request.post(
  {
    url: url,
    formData: formData
  },
  function(error, response) {
    if (!error && response.statusCode === 200) {
      // 删除压缩包
      fs.unlink('qui-component.zip', function() {})
      console.log('上传成功')
      clearInterval(time)
    }
  }
)
