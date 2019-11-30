<template>
  <div class="upload-file qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <div class="upload-box">
      <upload-file is-compress :width="100" :height="100" :max-num = '1' v-model="fileList"></upload-file>
      {{JSON.stringify(fileList)}}
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
      fileList: [{
        id: 1,
        url: 'http://canpoint.oss-cn-beijing.aliyuncs.com/2019/08/24/481aa33b351447eeaf1944da8f845bdf.jpg'
      }]
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

