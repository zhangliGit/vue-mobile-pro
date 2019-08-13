<template>
  <div class="scroll-list qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <scroll-list ref="scrollList" pullUpLoad @loadMore="loadMore">
      <div class="list qui-bd-b" v-for="i in dataList" :key="i">
        我是第{{i}}条数据
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import ScrollList from '@c/common/ScrollList'
export default {
  name: 'ScrollListCom',
  components: {
    ScrollList,
    HeaderCom
  },
  data () {
    return {
      dataList: 20
    }
  },
  methods: {
    loadMore () {
      this.dataList += 20
      this.$nextTick(() => {
        this.$refs.scrollList.refresh()
      })
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

