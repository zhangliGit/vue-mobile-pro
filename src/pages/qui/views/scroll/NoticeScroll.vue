<template>
  <div class="notice-scroll qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <div class="qui-fx-f1">
      <notice-scroll :notice-list="noticeList" ref="levelScroll"></notice-scroll>
      <div style="margin-top: 20px;">
        <notice-scroll :height="3" :notice-list="noticeList" ref="levelScroll"></notice-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import noticeScroll from '@c/common/NoticeScroll'
export default {
  name: 'ScrollListCom',
  components: {
    noticeScroll,
    HeaderCom
  },
  data () {
    return {
      noticeList: [
        {
          id: 1,
          content: '今天星期五,请大家带好雨伞之类的东西'
        },
        {
          id: 2,
          content: '全品文教移动端发布上线啦'
        },
        {
          id: 3,
          content: '这周双休'
        }
      ]
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

