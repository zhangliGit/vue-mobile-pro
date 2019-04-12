<template>
  <div class="qui-fx fx-ver">
    <header-com is-back :title="title">
      <div @click="goBack" slot="lef-btn">
        <i class="back-btn iconfont iconfanhui1"></i>
      </div>
    </header-com>
    <div class="fx-f1 qui-flex qui-ver">
      <div class="">
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
export default {
  name: 'detail',
  components: {
    HeaderCom
  },
  data () {
    return {
      title: '详情',
    }
  },
  computed: {
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .back-btn {
    color:#fff;
    font-size: 1.2rem
  }
</style>
