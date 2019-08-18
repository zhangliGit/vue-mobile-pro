<template>
  <div class="home qui-page qui-fx">
    <scroll-list ref="scrollList">
      <div>
        <div @click="goDetail" class="qui-list qui-bd-b" v-for="list in dataList" :key="list.id">
          <div class="qui-te2">{{list.title}}</div>
        </div>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import device from '../device'
import ScrollList from '@c/common/ScrollList'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    ScrollList
  },
  computed: {
    ...mapState('home', [
      'dataList'
    ])
  },
  methods: {
    ...mapActions('home', [
      'getIndex'
    ]),
    ...mapMutations('home', [
      'updateData'
    ]),
    goDetail () {
      this.$router.push('/detail')
    }
  },
  mounted () {
    // 手机信息
    const dpr = window.devicePixelRatio
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight
    alert(dpr + '--' + w + '--' + h)
    alert(device.getGlRenderer())
    alert(device.getModels())
  }
}
</script>

<style lang="less" scoped>
  .qui-list {
    padding: 20px 30px;
    .time {
      color: @second-color;
      text-align:right;
      margin-top: 10px;
    }
  }
</style>
