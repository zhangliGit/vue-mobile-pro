<template>
  <div class='mutil-menu qui-page qui-fx-ver'>
    <multi-menu title='请假类型' :action-list='actionList' v-model='isShow' @select='select'></multi-menu>
    <header-com isBack :title='$route.query.title'></header-com>
    <div class='select-list qui-fx-ac qui-fx-jsb qui-bd-b'>
      <div>请假类型：</div>
      <div @click='isShow = true' class='qui-fx-f1 qui-tx-r' style='color:#666'>{{ type }}</div>
      <div class='rit-icon'></div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import MultiMenu from '@c/common/MultiMenu'
export default {
  name: 'MultiMenuCom',
  components: {
    MultiMenu,
    HeaderCom
  },
  data () {
    return {
      isShow: false,
      type: '请选择',
      actionList: [
        {
          'code': 'ZX13sogn6rpjknq',
          'name': '婚假',
          'pCode': '',
          'systemCode': 'CSKQ',
          'children': [{
            'children': null,
            'code': 'ZX13u3x3q89tdlu',
            'name': '新婚假',
            'pCode': 'ZX13sogn6rpjknq',
            'systemCode': 'CSKQ'
          }, {
            'children': null,
            'code': 'ZX13u3x42cxkdnm',
            'name': '晚婚假',
            'pCode': 'ZX13sogn6rpjknq',
            'systemCode': 'CSKQ'
          }]
        }
      ]
    }
  },
  methods: {
    select (item) {
      this.type = item.name
    }
  }
}
</script>

<style lang='less' scoped>
  .select-list {
    background-color:#fff;
    padding: 30px 20px;
  }
</style>

