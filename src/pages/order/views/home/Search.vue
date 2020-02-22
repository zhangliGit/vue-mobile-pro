<template>
  <div class="home qui-page qui-fx-ver">
    <date-time title="下单日期" type="date" v-model="timeTag" @get-date="getDate"></date-time>
    <header-com isBack title="订货查询"></header-com>
    <div class="submit-item qui-fx-ac qui-bd-b">
      <div class="tip">手机号：</div>
      <div class="submit-input qui-fx-f1">
        <input class="input" v-model="phone" type="tel" placeholder="请输入手机号" />
      </div>
    </div>
    <div class="submit-item qui-fx-ac qui-bd-b">
      <div class="tip">查询日期：</div>
      <div class="submit-input qui-tx-r qui-fx-f1" @click="showDate()">{{ dateTime }}</div>
      <div class="rit-icon"></div>
    </div>
    <div class="submit-bottom">
      <div class="submit-button" @click="searchList">查询</div>
    </div>
    <scroll-list>
      <div class="order-box">
        <no-data msg="暂无订单信息" v-if="orderList.length === 0"></no-data>
        <div class="order-list qui-fx-ac" v-for="(order, index) in orderList" :key="index">
          <div class="qui-fx-f1">
            <p>姓名：{{ order.name }}</p>
            <p>手机号：{{ order.phone }}</p>
            <p>地址：{{ order.address }}</p>
            <p>订货时间：{{ order.dateTimes }}</p>
            <p>备注：{{ order.remarks }}</p>
            <p>订货信息：</p>
            <p class="info">{{ order.orderInfo }}</p>
          </div>
          <div v-if="order.dateTime === currentDate && isOrder === 'yes'">
            <div v-if="false" class="action-btn modify-btn">修改</div>
            <div class="action-btn del-btn" @click="delList(order, index)">删除</div>
          </div>
        </div>
      </div>
    </scroll-list>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { Button } from 'vant'
import $tools from '@u/tools'
import HeaderCom from '../../component/HeaderCom'
import ScrollList from '@c/common/ScrollList'
import DateTime from '@c/common/DateTime'
import NoData from '@c/common/NoData'
export default {
  name: 'Search',
  components: {
    [Button.name]: Button,
    HeaderCom,
    ScrollList,
    DateTime,
    NoData
  },
  computed: {
    ...mapState('home', ['isOrder'])
  },
  data() {
    return {
      timeTag: false,
      currentDate: $tools.gmtToDate(new Date().getTime()).substring(0, 10),
      dateTime: $tools.gmtToDate(new Date().getTime()).substring(0, 10),
      phone: '',
      orderList: []
    }
  },
  methods: {
    ...mapActions('home', ['getOrderList', 'delOrder']),
    getDate(day) {
      this.dateTime = day
    },
    showDate() {
      this.timeTag = true
    },
    async searchList() {
      if (this.phone === '') {
        this.$toast('请输入电话号码')
        return
      }
      const res = await this.getOrderList({
        phone: this.phone,
        dateTime: this.dateTime
      })
      this.orderList = res.data
    },
    delList(order, index) {
      this.$dialog
        .confirm({
          title: '温馨提示',
          message: '确定删除您的订单吗?'
        })
        .then(async () => {
          await this.delOrder(order)
          this.$toast('删除成功')
          this.orderList.splice(index, 1)
        })
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.submit-item {
  background-color: #fff;
  height: 95px;
  padding: 0px 25px 0px 40px;
  .submit-input {
    color: #666;
    margin-left: 30px;
    .input {
      text-align: right;
      width: 100%;
      border: none;
      height: 66px;
      line-height: 66px;
    }
  }
}
.action-btn {
  padding: 10px 20px;
  border-radius: @radius;
  color: #fff;
  margin: 20px;
}
.modify-btn {
  background-color: @main-color;
}
.del-btn {
  background-color: red;
}
.order-list {
  color: #666;
  background-color: #eee;
  line-height: 50px;
  padding: 20px;
  margin: 20px 0;
  .info {
    text-indent: 50px;
  }
}
.submit-button {
  margin: 20px 20px 0px 20px;
  height: 80px;
  line-height: 80px;
  border-radius: 8px;
  color: #fff;
  background-color: @main-color;
  text-align: center;
}
</style>
