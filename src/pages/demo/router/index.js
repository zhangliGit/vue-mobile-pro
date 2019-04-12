import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
const Detail = (resolve) => { require(['../views/Detail.vue'], resolve) }
Vue.use(Router)
    
const router = new Router({
  mode: 'hash', // history
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router
