<template>
  <div class="home qui-page qui-fx-ver">
    <header-com title="绿捷超市订货">
      <div slot="left">
        <p @click="getMenu" style="color: #fff;">今日菜单</p>
      </div>
      <div slot="rit">
        <p @click="search" style="color: #fff;">查询</p>
      </div>
    </header-com>
    <scroll-list ref="scrollList">
      <order-submit></order-submit>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import OrderSubmit from './OrderSubmit'
import ScrollList from '@c/common/ScrollList'
export default {
  name: 'Home',
  computed: {},
  data() {
    return {}
  },
  components: {
    ScrollList,
    HeaderCom,
    OrderSubmit
  },
  methods: {
    getMenu() {
      this.$router.push('/orderMenu')
    },
    search() {
      this.$router.push('/search')
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped></style>
