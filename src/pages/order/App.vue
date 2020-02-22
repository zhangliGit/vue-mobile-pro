<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"> </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      name: 'zhangli'
    }
  }
}
</script>

<style lang="less" scoped></style>
