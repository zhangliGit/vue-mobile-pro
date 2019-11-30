<template>
  <div class="qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <van-collapse v-model="activeNames" @change="onChange">
      <collapse-com :list="list"></collapse-com>
    </van-collapse>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import CollapseCom from '@c/common/CollapseCom'
export default {
  name: 'CollapseTest',
  components: {
    HeaderCom,
    CollapseCom
  },
  data () {
    return {
      activeNames: [],
      list: [
        {
          code: 'WHQP1',
          levelCode: 'WHQP1',
          name: '武汉全品文教',
          children: [
            {
              children: [],
              code: 'TKJS1',
              levelCode: 'WHQP1_TKJS1',
              name: '题库建设部'
            }, {
              code: 'AIJY1',
              levelCode: 'WHQP1_AIJY1',
              name: 'AI教育中心',
              children: [
                {
                  children: [],
                  code: 'CPCS1',
                  levelCode: 'WHQP1_AIJY1_CPCS1',
                  name: '产品与测试部'
                }, {
                  children: [],
                  code: 'SFB1',
                  levelCode: 'WHQP1_AIJY1_SFB11',
                  name: '算法部'
                }, {
                  children: [],
                  code: 'UI',
                  levelCode: 'WHQP1_AIJY1_UI',
                  name: 'UI'
                }, {
                  children: [],
                  code: 'YXB1',
                  levelCode: 'WHQP1_AIJY1_YXB1',
                  name: '营销部'
                }, {
                  children: [],
                  code: 'YFB1',
                  levelCode: 'WHQP1_AIJY1_YFB1',
                  name: '研发部'
                }]
            }]
        }]
    }
  },
  mounted () {
  },
  methods: {
    onChange (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>

</style>

