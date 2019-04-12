<template>
  <div class="co-flex co-ver">
    <header-com is-back :title="title"></header-com>
    <div @click="goL" class="co-pd-a08">跳转</div>
    <div class="co-f1 co-flex co-bg-0 co-ver">
      <div class="">
        <child-a></child-a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ChildA from '../component/ChildA'
export default {
  name: 'provide',
  components: {
    HeaderCom,
    ChildA
  },
  data () {
    return {
      title: 'provide',
    }
  },
  computed: {
  },
  methods: {
    goL () {
      this.$router.push('/detail')
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
</style>
