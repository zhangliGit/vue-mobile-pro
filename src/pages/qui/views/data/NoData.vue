<template>
  <div class="no-data qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <div class="qui-fx-f1">
      <no-data msg="什么也没有~"></no-data>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import NoData from '@c/common/NoData'
export default {
  name: 'NoDataCom',
  components: {
    NoData,
    HeaderCom
  },
  data () {
    return {
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

