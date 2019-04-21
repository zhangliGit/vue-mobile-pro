import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
const Appointment = (resolve) => { require(['../views/Appointment.vue'], resolve) }
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '平安校园'
      }
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: Appointment,
      meta: {
        title: '微信预约'
      }
    }
  ]
})

export default router
