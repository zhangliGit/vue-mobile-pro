const validateForm = (yzForm, form, callback) => {
  for (let val in form) {
    if (yzForm.hasOwnProperty(val)) {
      if (form[val] === '' || JSON.stringify(form[val]) === '[]' || JSON.stringify(form[val]).indexOf('请选择') > -1) {
        alert(yzForm[val])
        return false
      }
    }
  }
  callback()
}

export default validateForm
