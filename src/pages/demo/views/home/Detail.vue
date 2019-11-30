<template>
  <div class="detail">
    详情界面
    {{count}}
  </div>
</template>

<script>
import { store } from './store'
export default {
  name: 'Detail',
  data () {
    return {
    }
  },
  computed: {
    count () {
      return store.count
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .detail {
    padding: 32px;
    line-height: 50px;
  }
</style>
