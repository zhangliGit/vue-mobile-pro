<template>
  <div class="level-scroll qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <div class="qui-fx-f1 qui-of">
      <calendar-show :exception-list = "exceptionList" :zc-list="zcList" ref="calendar" @get-date = "getDate"></calendar-show>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import CalendarShow from '@c/common/CalendarShow'
export default {
  name: 'CalendarShowCom',
  components: {
    CalendarShow,
    HeaderCom
  },
  data () {
    return {
      exceptionList: [1, 2, 3, 4],
      zcList: [10, 12, 14]
    }
  },
  mounted () {
  },
  methods: {
    getDate (date, type) {
      console.log(date, type)
    }
  }
}
</script>

<style lang="less" scoped>
</style>

