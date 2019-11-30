
import Vue from 'vue'
const store = Vue.observable({
  count: 1
})

const mutations = {
  setCount () {
    store.count++
  }
}
export {
  store,
  mutations
}
