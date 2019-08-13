<template>
  <div :class="'qui-fx-f1 qui-of scroll-list ' + className" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'ScrollList',
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    init () {
      try {
        this.scroll.refresh()
      } catch (err) {}
    },
    refresh () {
      try {
        this.scroll.finishPullUp()
        this.scroll.refresh()
      } catch (err) {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.scroll) {
        const pullUpLoad = this.pullUpLoad
          ? {
            threshold: 0
          }
          : false
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          pullUpLoad,
          scrollbar: true
        })
        this.scroll.refresh()
        // 处理列表不操作，在返回到列表页时滚动卡死
        this.scroll.scrollTo(0, 1)
        this.scroll.on('pullingUp', () => {
          this.$emit('loadMore')
        })
      }
    })
  }
}
</script>
<style lang="less" scoped>
  .scroll-list {
    position: relative;
  }
</style>
