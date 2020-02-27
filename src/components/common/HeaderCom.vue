<template>
  <div id="header" class="header">
    <div class="header-slide qui-fx">
      <div class="back-btn" @click="goBack" v-if="isBack">
        <img :src="back" alt />
      </div>
    </div>
    <div class="co-header-title">{{title}}</div>
    <div class="header-slide qui-fx-je"></div>
  </div>
</template>
<script>
import back from './img/back.png'
export default {
  name: 'HeaderCom',
  props: {
    isBack: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Qui'
    }
  },
  data() {
    return {
      back
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
#header {
  width: 100%;
  background: #10436b;
  padding: 0 0.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  .back-btn {
    img {
      width: 48px;
      height: 48px;
      display: block;
    }
  }
  .header-slide {
    min-width: 4rem;
  }
  .co-header-title {
    flex: 1;
    color: #fff;
    font-size: 0.8rem;
    text-align: center;
    height: 88px;
    line-height: 88px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
