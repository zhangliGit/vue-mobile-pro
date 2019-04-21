import Vue from 'vue'
import Vuex from 'vuex'
import Appoint from './modules/appoint'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Appoint
  },
  state: {
  }
})

export default store
