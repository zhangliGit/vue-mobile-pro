<template>
  <div class="home">
    <div class="home-title qui-bd-b qui-fx-jsb">
      <div class="home-text">访客</div>
      <div @click="getDate">日期 {{time}}</div>
    </div>
    <div class="home-list qui-fx-wp">
      <div v-for="item in visitorTypeList" :key="item.id" class="list-item qui-fx-ac-jc" @click="appoint">
        <div class="item-icon">
          <img :src="item.icon" alt="">
        </div>
        <div class="item-text">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import DatetimePicker from 'anima-datetimepicker'

export default {
  name: 'home',
  beforeRouteEnter (to, from, next) {
    if (from.path === '/') {
      next(vm => {
        vm.getVisitorType()
      })
    }
    next()
  },
  data () {
    return {
      time: '2019-04-21 20:01'
    }
  },
  created () {
    this.picker = new DatetimePicker({
      format: 'YYYY-MM-DD HH:II',
      onConfirm: (value) => {
        this.time = value
      }
    })
  },
  computed: {
    ...mapState('Appoint', [
      'visitorTypeList'
    ])
  },
  methods: {
    ...mapActions('Appoint', [
      'getVisitorType'
    ]),
    appoint () {
      this.$router.push('/appointment')
    },
    getDate () {
      this.picker.show(this.time)
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .home {
    padding: 30px;
  }
  .home-title {
    padding: 20px 0;
    .home-text {
      border-left: 4PX rgb(19, 34, 122) solid;
      padding-left: 15px;
      height: 40px;
      line-height: 40px;
      font-size: 30px;
    }
  }
  .list-item {
    padding:20px;
    width: 25%;
    .item-icon img {
      display: block;
      width: 80px;
      height: 80px;
      background:#ccc;
      border-radius: 100%;
    }
    .item-text {
      margin-top: 8px;
      font-size: 12PX;
      text-align: center;
    }
  }
</style>
