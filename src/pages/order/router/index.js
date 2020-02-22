import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'

/**
 * @des 路由界面统计
 */
const RouterPage = [...Home]

/**
 * @des 路由界面遍历配置
 */
let RouterConfig = []
RouterPage.forEach(page => {
  let pagePath = page.path.replace(page.path[0], page.path[0].toLowerCase())
  RouterConfig.push({
    path: page.type ? '/' : `/${pagePath}`,
    name: `${pagePath}`,
    component: () => import(`../views/${page.module}/${page.path}.vue`),
    meta: {
      title: page.title,
      keepAlive: page.keepAlive || false
    }
  })
})

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [...RouterConfig]
})

export default router
