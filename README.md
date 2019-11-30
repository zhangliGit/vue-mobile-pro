### vue-mobile-app

#### 安装依赖
```
> cnpm i or yarn install
```

### 多环境配置

```js
const ConfigEnv = process.env.VUE_APP_URL
let hostEnv = ''

if (ConfigEnv === 'test') {
  hostEnv = 'http://prod'
} else if (ConfigEnv === 'prod') {
  hostEnv = 'http://prod'
} else {
  hostEnv = 'http://dev'
}

export default hostEnv
```

#### 本地启动
```js
> npm run dev  // 启动开发环境

> npm run dev-test // 启动测试环境

> npm run dev-prod  //启动正式环境
```


#### 本地打包

```js
> npm run build // 打包开发环境

> npm run build-test // 打包测试环境

> npm run build-prod // 打包正式环境
```

> 打包时要分模块打包, 单独打包每个模块, 只需要传入模块文件名即可, 否则会打包所有模块

```js
// 如果项目中同时开发了两个模块 demo和main，打包时

> npm run build demo

> npm run build main

```

#### qui组件发布

```
npm run qui
```
