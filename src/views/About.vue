<template>
  <div class="about">
    <h1>{{ about }}</h1>
    <p>
      我是p元素
    </p>
    <no-data></no-data>
    <div class="main">我是main元素</div>
    <div class="" @click="dialog">新元素23</div>
    <div class="my-color">字体颜色</div>
  </div>
</template>

<script>
import NoData from '@c/NoData'
import { Dialog } from 'vant'
import { resolve } from 'url'
import { setTimeout } from 'timers'
export default {
  name: 'About',
  components: {
    NoData
  },
  data () {
    return {
      about: '我是about界面2'
    }
  },
  mounted () {
    console.log('haha')
  },
  methods: {
    dialog () {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('ok')
        })
      }).then(res => {
        console.log(res)
      })
      Dialog.alert({
        title: '标题',
        message: '弹窗内容'
      }).then(() => {
        // on close
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  background-color: red;
}
.about {
  p {
    color: yellow;
  }
  .my-color {
    background: @myColor;
    width: @sidebar;
  }
}
</style>
