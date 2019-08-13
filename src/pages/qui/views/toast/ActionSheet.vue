<template>
  <div class="action-sheet qui-page qui-fx-ver">
    <action-sheet title="选择菜单" :action-list="actionList" v-model="isShow" @select="select"></action-sheet>
    <header-com isBack :title="$route.query.title"></header-com>
    <div class="select-list qui-fx-ac qui-fx-jsb qui-bd-b">
      <div>选择菜单：</div>
      <div @click="isShow = true" class="qui-fx-f1 qui-tx-r" style="color:#666">{{ type }}</div>
      <div class="rit-icon"></div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import ActionSheet from '@c/common/ActionSheet'
export default {
  name: 'ActionSheetCom',
  components: {
    ActionSheet,
    HeaderCom
  },
  data () {
    return {
      isShow: false,
      type: '请选择',
      actionList: [
        {
          id: '1',
          name: '年假'
        },
        {
          id: '2',
          name: '事假'
        },
        {
          id: '3',
          name: '婚假'
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

<style lang="less" scoped>
  .select-list {
    background-color:#fff;
    padding: 30px 20px;
  }
</style>

