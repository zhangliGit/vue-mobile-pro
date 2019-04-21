import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(Router)
const router = new Router({
  mode: 'hash', // history
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '个人中心'
      }
    }
  ]
})

export default router
