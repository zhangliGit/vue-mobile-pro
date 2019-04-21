### qui-mobile-template

#### 安装依赖
```
> cnpm i or yarn install
```

#### 本地启动
```
> npm run dev  // 启动开发环境

> npm run dev-test // 启动测试环境

> npm run dev-prod  //启动正式环境
```


#### 本地打包

```
> npm run build // 打包开发环境

> npm run build-test // 打包测试环境

> npm run build-prod // 打包正式环境 
```

> 打包时要分模块打包, 单独打包每个模块, 只需要传入模块文件名即可, 否则会打包所有模块

```
// 如果项目中同时开发了两个模块 safe-campus和person-center，打包时

> npm run build safe-campus

> npm run build person-cener

```