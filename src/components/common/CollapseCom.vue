<template>
  <div class="collapse-com">
    <van-collapse-item v-for="item in list" :key="item.id" :title="item.name" :name="item.levelCode" :border="false">
      <collapse-com :list="item.children"></collapse-com>
    </van-collapse-item>
  </div>
</template>

<script>
export default {
  name: 'CollapseCom',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.collapse-com /deep/ .van-collapse-item__content{
  padding: 0 15px!important;
}
</style>
