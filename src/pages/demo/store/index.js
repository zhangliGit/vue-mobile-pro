import Vue from 'vue'
import Vuex from 'vuex'
import Home from './module/home'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Home
  },
  state: {}
})

export default store
