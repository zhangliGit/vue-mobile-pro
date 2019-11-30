<template>
  <div class="notice-scroll" :style="{backgroundColor: bgColor,height: height + 'rem',}">
    <ul :style="{marginTop: mTop + 'rem'}">
      <li @click="show(item)" :style="{height: height + 'rem', lineHeight: height + 'rem'}" v-for="(item, index) in noticeList" :key="index" class="qui-te" v-html="item.content || '暂无公告~'"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NoticeScroll',
  props: {
    // 滚动间隔时间
    time: {
      type: Number,
      default: 4000
    },
    bgColor: {
      type: String,
      default: '#fff'
    },
    // 滚动区域高度
    height: {
      type: Number,
      default: 1.8
    },
    // 通知滚动列表
    noticeList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      mTop: 0
    }
  },
  methods: {
    show (item) {
      this.$emit('show', item)
    }
  },
  mounted () {
    let currIndex = 1
    let time = setInterval(() => {
      if (this.noticeList.length <= 1) {
        clearInterval(time)
        return
      }
      this.mTop = -this.height * currIndex
      currIndex++
      if (currIndex > this.noticeList.length) {
        this.mTop = 0
        currIndex = 1
      }
    }, this.time)
  }
}
</script>

<style lang="less" scoped>
  .notice-scroll {
    overflow: hidden;
    ul {
      transition: all 1s linear;
      width: 100%;
    }
  }
</style>
