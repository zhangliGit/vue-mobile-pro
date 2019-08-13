<template>
  <div class="wrapper" :style="{backgroundColor: bgColor}" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'LevelScroll',
  props: {
    bgColor: {
      type: String,
      default: '#fff'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    refresh () {
      this.scroll.refresh()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollX: true
      })
      this.scroll.refresh()
    })
  }
}
</script>
<style lang="less">
  .wrapper {
  }
</style>
