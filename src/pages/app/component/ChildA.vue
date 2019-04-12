<template>
  <div class="child-a co-pd-a08">
    <div>{{tag}}</div>
    <button @click="change">改变属性</button>
    <button @click="changeC">改变c</button>
    <child-b :theme = "theme" @changeC = 'changeC'></child-b>
  </div>
</template>

<script>
import ChildB from './ChildB.vue'
import ChildC from './ChildC.vue'
import Vue from 'vue'
export default {
  name: 'childA',
  provide () {
    return {
     col: this.state,
     name: {
       title: 'hah'
     },
     getData: () => {
       console.log('getData')
     },
     getChildCom: ($com) => {
       this.$com = $com
     }
    }
  },
  components: {
    ChildB
  },
  data () {
    return {
      color: 'red',
      theme: 'red',
      tag: '我是a1组件',
      title: 'zhangli',
      state: (() => {
        return Vue.observable({
          color: 'red'
        })
      })()
    }
  },
  methods: {
    changeC () {
      console.log(3)
      console.log(this.$com)
    },
    change () {
      console.log(this.state)
      this.state.color = 'blue';
      this.color = 'green'
      this.theme = 'green'
      this.title = 'chentian'
    }
  },
  mounted () {
  }
}
</script>

<style>

</style>
