<template>
  <div class="qui-page qui-fx-ver">
    <popup-box v-model="isShow" @confirm="isShow = false" :cancel-text="'取消'" width="80" height="80">
      <div slot="title" style="padding: 10px; text-align:center">
        我是头部标题
      </div>
      <div class="info-list">
        <div style="height: 2rem; line-height: 2rem;" class="qui-bd-b" v-for="i in 20" :key="i">
          {{ i }}
        </div>
      </div>
    </popup-box>
    <header-com isBack :title="$route.query.title"></header-com>
    <div class="qui-fx-f1 qui-fx">
      <div class="btn-box" @click="isShow = true" style="margin-top: 50px">弹出详情信息</div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import PopupBox from '@c/common/PopupBox'
export default {
  name: 'PopupBoxCom',
  components: {
    PopupBox,
    HeaderCom
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.info-list {
  padding: 20px;
}
</style>
