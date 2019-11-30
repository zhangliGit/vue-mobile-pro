<template functional>
  <div class="two">
    two
    <div v-for="list in props.dataList" :key="list.id">
      {{list.name}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    change () {
      alert(2)
    }
  }
}
</script>

<style lang="less" scoped>
.two {
  padding:60px;
  background-color:#fff
}
</style>
