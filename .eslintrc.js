module.exports = {
  env: {
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'vue/mustache-interpolation-spacing': 0,
    'vue/valid-v-model': 0,
    'no-undef': 0,
    'no-console': 0
  }
}
