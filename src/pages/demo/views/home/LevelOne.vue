<template>
  <div class="level-one">
    levelOne
    <div>
      {{item.title}}
    </div>
    <div>{{ $attrs.foo }}{{$attrs.zoo}}</div>
    <div class="btn" @click="change">调用祖先事件</div>
  </div>
</template>

<script>
export default {
  name: 'LevelOne',
  data () {
    return {
    }
  },
  inject: {
    item: 'item'
  },
  watch: {
  },
  methods: {
    change () {
      this.$listeners.change()
    }
  },
  mounted () {
    console.log('level-attrs', this.$attrs)
    console.log('level-listeners', this.$listeners)
  }
}
</script>

<style lang="less" scoped>
.level-one {
  padding:60px;
  color:#fff;
  background-color:#333;
  .btn {
      padding: 10px 15px;
      display: inline-block;
      border-radius: 6px;
      margin: 30px;
      background-color: #ccc;
    }
}
</style>
