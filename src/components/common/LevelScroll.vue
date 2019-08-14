<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'LevelScroll',
  components: {
  },
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollX: true
      })
    })
  }
}
</script>
<style lang="less">
</style>
