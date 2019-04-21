<template>
  <div class="home">
    <div @click="goDetail" class="qui-list qui-bd-b qui-fx-jsb" v-for="i in 20" :key="i">
      <span>Qui前端框架</span>
      <i class="iconfont iconxiangyou"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
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
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .qui-list {
    padding: 40px 20px;
  }
</style>
