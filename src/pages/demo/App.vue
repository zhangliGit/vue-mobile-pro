<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive include="">
        <router-view  class="Router qui-page qui-fx" />
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
    $route (to, from) {
      if (history.state == null || parseInt(history.state.key) < parseInt(this.lastKey)) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.lastKey = history.state == null ? 0 : history.state.key
    }
  }
}
</script>

<style lang="less">
.Router {
  transition: all .3s ease
}
.slide-left-enter,
.slide-right-leave-to {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0)
}
.slide-right-enter,
.slide-left-leave-to
 {
    -webkit-transform: translate(-99%, 0);
    transform: translate(-99%, 0)
}
</style>
