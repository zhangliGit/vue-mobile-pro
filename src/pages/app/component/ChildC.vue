<template>
  <div class="child-c co-mg-a08 co-pd-a08 co-bd-a">
    <div>{{tag}}</div>
    <div>我的名字是: {{name.title}}</div>
    <button @click="changeA">改变A</button>
    <button @click="changeB">改变B</button>
    <button @click="changeC">改变自己</button>
  </div>
</template>

<script>
import bus from './event'
export default {
  name: 'childC',
  component: {
  },
  inject: ['name', 'getData', 'getChildCom'],
  data () {
    return {
      tag: '我是c'
    }
  },
  methods: {
    changeA () {
      this.getData()
    },
    changeC () {
      this.tag = '我是新c'
    },
    changeB () {
      bus.$emit('changeB')
    }
  },
  updated () {
    this.getChildCom(this)
  },
  mounted () {
    this.getChildCom(this)
  }
}
</script>

<style>

</style>
