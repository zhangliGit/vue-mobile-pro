<template>
  <div class="qui-flex qui-page fx-ver">
    <header-com :title="title">
      <div slot="rit-btn" @click="toogleDemo">
        <img class="down-img" :src="show" alt="">
      </div>
    </header-com>
    <div class="fx-f1 co-flex">
      <scroll-list>
        <div :class="['qui-fx fx-wp qui-list qui-bd-b', {'qui-list--toogle': toogle}]">
          <div @click="goApp(app.url)" class="app-list qui-fx fx-ver fx-ac fx-jc" v-for="app in appList" :key="app">
            <div class="app-img" :style="{backgroundColor: bgCol[app.randomNum]}">
              <img :src="app.icon" alt="" />
            </div>
            <div class="app-name" :style="{color: bgCol[app.randomNum]}">{{app.name}}</div>
          </div>
        </div>
        <div class="module-list qui-fx fx-wp">
          <div @click="goApp(app.url)" class="app-list module-app qui-fx fx-ver fx-ac fx-jc" v-for="app in moduleList" :key="app">
            <div class="app-img" :style="{backgroundColor: bgCol[app.randomNum]}">
              <img :src="app.icon" alt="" />
            </div>
            <div class="app-name" :style="{color: bgCol[app.randomNum]}">{{app.name}}</div>
          </div>
        </div>
      </scroll-list>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import docs from './img/doc.png'
import app from './img/app.png'
import demo from './img/demo.png'
import show from './img/show.png'

export default {
  name: 'app',
  components: {
    HeaderCom,
    ScrollList
  },
  data () {
    return {
      title: 'Qui',
      show,
      toogle: true,
      bgCol: ['#10436B','#1296db', '#0fcfff', '#13227a', '#1eae5d', '#394fd0'],
      appList: [
        {
          name: 'Qui文档',
          icon: docs,
          randomNum: 0,
          url: 'https://zhangligit.github.io/qui-docs/#/'
        },
        {
          name: 'Qui组件',
          icon: demo,
          randomNum: 1,
          url: 'https://zhangligit.github.io/qui-docs/#/'
        },
        {
          name: 'Qui示例',
          icon: app,
          url:  'demo',
          randomNum: 2,
        }
      ],
      moduleList: [
      ]
    }
  },
  methods: {
    toogleDemo () {
      this.toogle = !this.toogle
    },
    goApp (path) {
      if (path.indexOf('http') > -1) {
        window.open(path)
      } else  {
        window.location.href = `./${path}.html`
      }
    }
  },
  mounted () {

  }
}
</script>

<style lang="less">
  .down-img {
    width: 36px;
    height: 36px;
    display: block
  }
  .qui-list {
    background-color: #fff;
    transition: height .3s linear;
    height: 0px;
  }
  .qui-list--toogle {
    height: 180px;
  }
  .app-list {
    width: 33.33%;
    .app-img {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 10px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 1.5rem;
        height: 1.5rem;
        display: block
      }
    }
    .app-name {
      margin-top: .2rem;
      color:#10436B;
      font-size: .6rem;
    }
  }
  .module-list {
    background: #fff;
    .module-app {
      padding: .5rem 0;
    }
  }
</style>
