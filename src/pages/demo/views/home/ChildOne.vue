<template>
  <div class="one">
    one
    <div>{{item.title}}</div>
    <div>{{ $attrs.foo }}{{$attrs.zoo}}</div>
    <div class="btn" @click="change">调用父元素事件</div>
    <slot name="item" :dataList="list"></slot>
    <level-one v-bind="$attrs" v-on="$listeners"></level-one>
  </div>
</template>

<script>
import LevelOne from './LevelOne'
export default {
  name: 'ChildOne',
  data () {
    return {
      list: {
        name: 'ct'
      }
    }
  },
  inject: {
    item: 'item'
  },
  computed: {
  },
  components: {
    LevelOne
  },
  watch: {
  },
  methods: {
    change () {
      this.$listeners.change()
    }
  },
  mounted () {
    console.log('one-attrs', this.$attrs)
    console.log('one-listeners', this.$listeners)
  }
}
</script>

<style lang="less" scoped>
.one {
  padding:60px;
  background-color:#3d7eff;
  .btn {
      padding: 10px 15px;
      display: inline-block;
      border-radius: 6px;
      margin: 30px;
      background-color: #ccc;
    }
}
</style>
