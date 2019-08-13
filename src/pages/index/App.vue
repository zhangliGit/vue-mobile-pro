<template>
  <div class="qui-page qui-fx-ver">
    <div id="header" class="header">
      <div class="header-slide qui-fx">
      </div>
      <div class="co-header-title">{{title}}</div>
      <div class="header-slide qui-fx-je" @click="toogleDemo">
        <img class="down-img" :src="show" alt="">
      </div>
    </div>
    <div class="fx-f1">
      <div :class="['qui-fx-wp qui-list qui-bd-b', {'qui-list--toogle': toogle}]">
        <div @click="goApp(app.url)" class="app-list qui-fx-ac-jc" v-for="(app, index) in appList" :key="index">
          <div class="app-img" :style="{backgroundColor: bgCol[app.randomNum]}">
            <img :src="app.icon" alt="" />
          </div>
          <div class="app-name" :style="{color: bgCol[app.randomNum]}">{{app.name}}</div>
        </div>
      </div>
      <div class="module-list qui-fx-wp">
        <div @click="goApp(app.url)" class="app-list module-app qui-fx-ac-jc" v-for="(app, index) in moduleList" :key="index">
          <div class="app-img" :style="{backgroundColor: bgCol[app.randomNum]}">
            <img :src="app.icon" alt="" />
          </div>
          <div class="app-name" :style="{color: bgCol[app.randomNum]}">{{app.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import docs from './img/doc.png'
import app from './img/app.png'
import demo from './img/demo.png'
import show from './img/show.png'

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      title: 'Qui',
      show,
      toogle: true,
      downTag: false,
      bgCol: ['#10436B', '#1296db', '#0fcfff', '#13227a', '#1eae5d', '#394fd0'],
      appList: [
        {
          id: 1,
          name: 'Qui文档',
          icon: docs,
          randomNum: 0,
          url: 'http://192.168.1.28:3000/#/'
        },
        {
          id: 2,
          name: 'Qui组件',
          icon: demo,
          randomNum: 1,
          url: 'qui'
        },
        {
          id: 3,
          name: '项目模块',
          icon: app,
          url: 'demo',
          randomNum: 2
        }
      ],
      moduleList: [
      ]
    }
  },
  methods: {
    toogleDemo () {
      this.toogle = !this.toogle
      this.downTag = !this.downTag
    },
    goApp (path) {
      if (path.indexOf('http') > -1) {
        window.open(path)
      } else {
        window.location.href = `./${path}.html`
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
  #header {
    width: 100%;
    background: #10436B;
    padding: 0 .5rem;
    text-align: center;
    display: flex;
    align-items: center;
    .header-slide {
      min-width:4rem
    }
    .co-header-title {
      flex: 1;
      color:#fff;
      font-size: .8rem;
      text-align: center;
      height: 44Px;
      line-height: 44Px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .down-img {
    width: 36px;
    height: 36px;
    display: block
  }
  .rit-btn {
    transition: all .3s ease
  }
  .down-aim {
    transform: rotate(180deg)
  }
  .qui-list {
    border-bottom: 1px #f5f5f5 solid;
    transition: height .3s linear;
    height: 0px;
    overflow: hidden;
  }
  .qui-list--toogle {
    height: 180px;
  }
  .app-list {
    width: 33.33%;
    .app-img {
      width: 100px;
      height: 100px;
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
