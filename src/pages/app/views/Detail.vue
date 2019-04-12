<template>
  <div class="co-flex co-ver">
    <header-com is-back :title="title"></header-com>
    <div class="co-f1 co-flex co-bg-0 co-ver">
      <div class="">
        <child-a></child-a>
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
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
</style>
