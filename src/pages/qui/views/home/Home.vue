<template>
  <div class="qui-page qui-fx-ver">
    <header-com :title="title"></header-com>
    <div class="qui-fx-f1 qui-fx">
      <div class="slide-menu">
        <ul>
          <li @click="changeMenu(index)" :class="['qui-bd-b slide-li', {'act': currentIndex === index}]" v-for="(menu, index) in slideList" :key="index">
            {{ menu }}
          </li>
        </ul>
      </div>
      <div class="qui-fx-f1 menu-list">
        <ul>
          <li @click="goDemo(list.path, list.title)" class="qui-fx-jsb qui-fx-ac qui-bd-b" v-for="(list, index) in menuList[currentIndex]" :key="index">
            <div>{{ list.title }}</div>
            <img src="../../assets/img/right.png" class="rit-img" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Toast from '../../router/toast.js'
import Scroll from '../../router/scroll.js'
import DateTime from '../../router/date.js'
import Menu from '../../router/menu.js'
import Data from '../../router/data.js'
import Form from '../../router/form.js'
import Upload from '../../router/upload.js'
import HeaderCom from '../../component/HeaderCom'
export default {
  name: 'Home',
  components: {
    HeaderCom
  },
  data () {
    return {
      slideList: [
        '弹出层',
        '滑动滚动',
        '日历日期',
        '菜单栏',
        '表单',
        '数据',
        '文件上传'
      ],
      title: 'Qui组件',
      currentIndex: 0,
      menuList: [Toast, Scroll, DateTime, Menu, Form, Data, Upload]
    }
  },
  methods: {
    changeMenu (index) {
      this.currentIndex = index
    },
    goDemo (path, title) {
      this.$router.push({
        path: `/${path}`,
        query: {
          title
        }
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
  .slide-menu {
    width: 200px;
    li {
      height: 90px;
      text-indent: 30px;
      line-height: 90px;
      border-left: 8px #f5f5f5 solid;
    }
    .act {
      background-color:#fff;
      color: @main-color;
      border-left: 8px @main-color solid;
    }
  }
  .menu-list {
    background-color:#fff;
    li {
      color:@des-color;
      padding: 0 20px;
      height: 90px;
      line-height: 90px;
    }
    .rit-img {
      width: 26px;
      height: 26px;
      display: block
    }
  }
</style>
