import Vue from 'vue'
import Vuex from 'vuex'
import qui from './module/home'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    qui
  },
  state: {}
})

export default store
