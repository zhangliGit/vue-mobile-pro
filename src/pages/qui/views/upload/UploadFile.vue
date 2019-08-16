<template>
  <div class="upload-file qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <div class="upload-box">
      <upload-file :max-num = '4' v-model="fileList"></upload-file>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import UploadFile from '@c/common/UploadFile'
export default {
  name: 'CalendarShowCom',
  components: {
    UploadFile,
    HeaderCom
  },
  data () {
    return {
      fileList: []
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .upload-box {
    background-color:#fff;
    padding: 20px;
  }
</style>

