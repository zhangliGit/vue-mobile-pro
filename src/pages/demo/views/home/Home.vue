<template>
  <div class="home qui-page qui-fx">
    <scroll-list ref="scrollList">
      <div>
        <div @click="goDetail" class="qui-list qui-bd-b" v-for="list in indexList" :key="list.id">
          <div class="qui-te2">{{list.title}}</div>
          <div class="time">{{list.time | setTime(123)}}</div>
        </div>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
      'indexList'
    ])
  },
  methods: {
    ...mapActions('home', [
      'getIndex'
    ]),
    goDetail () {
      this.$router.push('/detail')
    }
  },
  mounted () {
    this.getIndex().then(() => {
      this.$nextTick(() => {
        this.$refs.scrollList.refresh()
      })
    })
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
