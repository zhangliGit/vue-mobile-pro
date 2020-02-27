<template>
  <div :class="'qui-fx-f1 qui-of scroll-list ' + className" ref="wrapper">
    <div :class="{'scroll-padd': isPadd}">
      <no-data v-if="isEmpty && isShow" msg="暂无数据"></no-data>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import NoData from './NoData'
export default {
  name: 'ScrollList',
  props: {
    isEmpty: {
      type: Boolean,
      default: true
    },
    isPadd: {
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: ''
    }
  },
  components: {
    NoData
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    init(param = '') {
      try {
        this.isShow = param && param.length === 0 ? true : false
        this.scroll.refresh()
      } catch (err) {}
    },
    refresh() {
      try {
        this.scroll.finishPullUp()
        this.scroll.refresh()
      } catch (err) {}
    }
  },
  mounted() {
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
        this.scroll.scrollTo(0, -1)
        this.scroll.on('pullingUp', () => {
          this.$emit('loadMore', true)
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
.scroll-padd {
  padding-top: 20px;
  padding-bottom: 2px;
}
</style>
