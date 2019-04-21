<template>
  <div id="app">
    <div id="back-btn" v-if="false" @click="goBack">
    </div>
    <transition :name="transitionName">
      <keep-alive include="">
        <router-view  class="Router qui-page" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    /**
     * @description 监听路由执行动画效果
     */
    $route (to, from) {
      if (history.state == null || parseInt(history.state.key) < parseInt(this.lastKey)) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.lastKey = history.state == null ? 0 : history.state.key
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>

#back-btn {
  width: 0;
  height: 0;
  width: 50px;
  height: 50px;
  background: #444;
  position: fixed;
  z-index: 9999;
  left: 1px;
  top: 1px;
  border-radius: 100%;
}
.Router {
  transition: all .3s linear;
}
.slide-left-enter,
.slide-right-leave-to {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-right-enter,
.slide-left-leave-to
 {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
}
</style>
