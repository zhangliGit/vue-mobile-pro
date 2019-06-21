/**
 * @description 基础表单验证提示
 * @author zhangli
 */

import Vue from 'vue'
const validateForm = (yzForm, form, callBack) => {
  for (let val in form) {
    if (yzForm.hasOwnProperty(val)) {
      if (form[val] === '' || JSON.stringify(form[val]) === '[]' || JSON.stringify(form[val]).indexOf('请选择') > -1) {
        Vue.prototype.$toast({
          duration: 1200,
          message: yzForm[val]
        })
        return
      }
    }
  }
  callBack()
}

export default validateForm
