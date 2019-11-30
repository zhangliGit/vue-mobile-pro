import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Toast from './toast'
import Scroll from './scroll'
import DateTime from './date'
import Form from './form'
import Data from './data'
import Upload from './upload'
import Menu from './menu'
import Echarts from './echarts'
import Collapse from './collapse'
/**
 * @des 路由界面统计
 */
const RouterPage = [
  ...Home,
  ...Toast,
  ...Scroll,
  ...DateTime,
  ...Form,
  ...Data,
  ...Upload,
  ...Menu,
  ...Echarts,
  ...Collapse
]

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
