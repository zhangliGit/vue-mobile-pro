<template>
  <div class="home qui-page qui-fx-ver">
    <header-com title="示例"></header-com>
    <scroll-list ref="scroll" @loadMore="showList" pullUpLoad>
      <div @click="goDetail" class="data-list qui-fx-jsb qui-bd-b" v-for="data in dataList" :key="data.id">
        <span>{{ data.name }}</span>
        <span>{{ data.number }}</span>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@com/HeaderCom'
import ScrollList from '@com/ScrollList'
import { store, actions } from '../../store'
export default {
  name: 'Home',
  components: {
    HeaderCom,
    ScrollList
  },
  computed: {
    count: () => store.count
  },
  data() {
    return { dataList: [], page: 1 }
  },
  async mounted() {
    this.showList()
  },
  methods: {
    async showList(tag = false) {
      const res = await actions.getIndex()
      if (tag) {
        // 加载下一页
        if (res.data.length === 0) {
          this.$notify('数据加载完毕')
          return
        }
        this.dataList = this.dataList.concat(res.data)
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      } else {
        this.dataList = res.data
        this.$refs.scroll.init(this.dataList)
      }
    },
    goDetail() {
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  .data-list {
    background-color: #fff;
    padding: 20px 10px;
  }
}
</style>
