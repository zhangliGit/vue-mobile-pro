<template>
  <div class="tab-bar qui-fx-ac">
    <van-tabs v-model="activeTab" @change="change" :title-active-color="color" color="#7b91f4" :type="type" class="tab-reset">
      <van-tab :title="tab.title" v-for="(tab, index) in tabList" :key="index"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant'
export default {
  name: 'TabBar',
  props: {
    type: {
      type: String,
      default: 'card'
    },
    value: {
      type: Number,
      default: 0
    },
    tabList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    color () {
      return this.type === 'card' ? '#fff' : '#7b91f4'
    },
    activeTab: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  methods: {
    change (index) {
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="less" scoped>
  .tab-bar {
    .tab-reset {
      width: 100%;
    }
    /deep/ .van-tab {
      font-size: 32px !important;
    }
    .van-tabs--card{
      padding-top: 0 !important;
      /deep/ .van-tabs__wrap, /deep/ .van-tabs__nav--card{
        height:70px;
      }
      /deep/ .van-tab span{
        height:70px;
        line-height: 70px;
      }
    }
  }
</style>
