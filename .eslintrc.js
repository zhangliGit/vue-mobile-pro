module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": [2, 2], // 缩进2个空格
    "no-const-assign": 2, // 禁止修改const声明的变量
    "no-multi-spaces": 1, // 禁止使用多余的空格
    "no-multiple-empty-lines": [1, {"max": 2}], // 空行不能超过两行
    "no-trailing-spaces": 1,  //一行结束后面不要有空格
    "eqeqeq": 2, // 必须使用全等
    "quotes": [1, "single"], //引号使用单引号
    "semi": 2, //不使用分号结尾
    "no-console":'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
