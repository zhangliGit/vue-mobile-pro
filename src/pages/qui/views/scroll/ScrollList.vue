<template>
  <div class="scroll-list qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <scroll-list ref="scrollList" pullUpLoad @loadMore="showList">
      <div class="list qui-bd-b" v-for="data in dataList" :key="data.id">
        <div class="qui-te2">
          {{ data.title }}
        </div>
        <div class="qui-tx-r">
          {{ data.time }}
        </div>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import ScrollList from '@c/common/ScrollList'
import { mapActions } from 'vuex'

export default {
  name: 'ScrollListCom',
  components: {
    ScrollList,
    HeaderCom
  },
  data () {
    return {
      dataList: [],
      params: {
        page: 1,
        size: 10
      }
    }
  },
  mounted () {
    this.showList()
  },
  methods: {
    ...mapActions('home', [
      'getIndex'
    ]),
    showList (type, fn, params, data) {
      /**
       * @des 列表数据加载
       * @type 是否下拉加载
       * @fn 调用的请求方法
       * @params 传递的参数
       * @data 界面数据
       */
      this.$tools.loadMoreData.apply(this, [type, 'getIndex', 'params', 'dataList'])
    }
  }
}
</script>

<style lang="less" scoped>
  .scroll-list {
    .list {
      padding: 30px 20px;
      background-color:#fff;
    }
  }
</style>

