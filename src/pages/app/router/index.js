import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
const Provide = (resolve) => { require(['../views/Provide.vue'], resolve) }
const Key = (resolve) => { require(['../views/Key.vue'], resolve) }
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
      path: '/provide',
      name: 'provide',
      component: Provide
    },
    {
      path: '/key',
      name: 'key',
      component: Key
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router
