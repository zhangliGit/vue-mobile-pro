<template>
  <div class="home">
    <div @click="goDetail" class="qui-list qui-bd-b" v-for="list in indexList" :key="list.id">
      <div class="qui-te2">{{list.title}}</div>
      <div class="qui-tx-r" v-setBg="'#666'">{{list.time | setTime(123)}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('Home', [
      'indexList'
    ])
  },
  methods: {
    ...mapActions('Home', [
      'getIndex'
    ]),
    goDetail () {
      this.$router.push('/detail')
    }
  },
  mounted () {
    this.getIndex()
  }
}
</script>

<style lang="less" scoped>
  .bg-1 {
    background: #999
  }
  .qui-list {
    .bg-1;
    padding: 40px 30px;
    color: @myColor
  }
</style>
