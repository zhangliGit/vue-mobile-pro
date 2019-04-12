<template>
  <div class="qui-fx fx-ver">
    <header-com :title="title">
      <div slot="lef-btn">
        <i @click="$router.back()" class="back-btn iconfont iconfanhui1"></i>
      </div>
    </header-com>
    <div class="fx-f1 qui-fx fx-ver">
      <component :is="currentCom"></component>
    </div>
    <div id="footer" class="qui-fx fx-ac qui-bd-t">
      <div @click="menuChange(index, menu.com, menu.title)" v-for="(menu, index) in footMenu" :key="menu.id" :class="['qui-fx fx-f1 fx-ver fx-ac fx-jc', {'menu--active': currentIndex == index}]">
        <div>
          <i :class="`iconfont ${menu.icon}`"></i>
        </div>
        <div class="footer-text">{{menu.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import List  from '../component/List.vue'
import Mine  from '../component/Mine.vue'

export default {
  name: 'home',
  components: {
		HeaderCom
  },
  data () {
    return {
      title: 'Qui',
      currentIndex: 0,
      currentCom: List,
      footMenu: [
        {
          id: 1,
          title: '首页',
          icon: 'icon1',
          com: List,
        },
        {
          id: 2,
          title: '我的',
          icon: 'icongerenzhongxin',
          com: Mine
        }
      ]
    }
  },
  methods: {
    menuChange (index, com, title) {
      this.currentIndex = index
      this.currentCom =  com
      this.title = title
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .back-btn {
    color:#fff;
    font-size: 1.2rem
  }
  #footer {
    color: #666;
    height: 100px;
    background: #fff;
    .menu--active {
      color: #10436B;
      height: 100%;
    }
    i {
      font-size: 1.2rem
    }
    .footer-text {
      font-size: .6rem
    }
  }
</style>
