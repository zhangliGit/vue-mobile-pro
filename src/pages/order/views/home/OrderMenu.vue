<template>
  <div class="home qui-page qui-fx-ver">
    <header-com isBack title="今日菜单"></header-com>
    <div class="order-tip">注意：当天未发布菜单时，不能订货</div>
    <scroll-list ref="scrollList">
      <div class="order-info">{{menuInfo}}</div>
    </scroll-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HeaderCom from '../../component/HeaderCom'
import ScrollList from '@c/common/ScrollList'
export default {
  name: 'OrderMneu',
  computed: {},
  data() {
    return {
      menuInfo: '菜单正在整理中，请耐心等候，发布后会在微信群提醒您下单...'
    }
  },
  components: {
    ScrollList,
    HeaderCom
  },
  methods: {
    ...mapActions('home', ['getOrderMenu']),
    async searchMenu() {
      const res = await this.getOrderMenu()
      if (res.data.length > 0 && res.data[0].status) {
        this.menuInfo = res.data[0].orderInfo
      }
    }
  },
  mounted() {
    this.searchMenu()
  }
}
</script>

<style lang="less" scoped>
.order-tip {
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fff;
}
.order-info {
  padding: 10px;
  background-color: #fff;
  line-height: 50px;
  color: #666;
}
</style>
