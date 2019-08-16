<template>
  <div class="tab-bar qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <div style="padding: 20px 0">
      <tab-bar :tab-list="tabList" type="line"></tab-bar>
    </div>
    <div style="padding: 20px 0">
      <tab-bar :tab-list="tabList"></tab-bar>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import TabBar from '@c/common/TabBar'
export default {
  name: 'TabBarCom',
  components: {
    TabBar,
    HeaderCom
  },
  data () {
    return {
      tabList: [{
        id: 1,
        title: '待审批'
      }, {
        id: 2,
        title: '已审批'
      }, {
        id: 3,
        title: '已撤销'
      }]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>

