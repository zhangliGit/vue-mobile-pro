<template>
  <scroll-list>
    <div>
      <div @click="goDetail" style="padding: .8rem .5rem; background: #fff" class="qui-bd-b" v-for="i in 20" :key="i">
        我是首页
      </div>
    </div>
  </scroll-list>
</template>

<script>
import ScrollList from '@c/ScrollList'
export default {
  name: 'list',
  components: {
    ScrollList
  },
  data () {
    return {
    }
  },
  methods: {
    goDetail () {
      this.$router.push('/detail')
    }
  },
}
</script>

<style lang="less" scoped>
</style>
