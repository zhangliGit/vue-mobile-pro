<template>
  <scroll-list>
    <div>
      <div @click="goDetail" class="qui-list qui-bd-b qui-fx fx-jsb" v-for="i in 20" :key="i">
        <span>Qui前端框架</span>
        <i class="iconfont iconxiangyou"></i>
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
  .qui-list {
    padding: .8rem .5rem;
    background: #fff
  }
</style>
