<template>
  <div class="upload-file qui-fx-ac">
    <div class="qui-fx">
      <div class="pic-user qui-fx-ac-jc" @click="delFile(index)" v-for="(item, index) in fileList" :key="item.id" >
        <div class="del-icon"></div>
        <img :src="item.url" alt="">
      </div>
    </div>
    <van-uploader :after-read="afterRead" v-if="fileList.length < 3">
      <div icon="photo" class="add-file">+</div>
    </van-uploader>
  </div>
</template>
<script>
import { Uploader } from 'vant'
export default {
  name: 'UploadFile',
  components: {
    [Uploader.name]: Uploader
  },
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
  },
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    afterRead (file) {
      this.fileList.push({
        id: Math.floor(Math.random() * 1000000),
        url: file.content
      })
      this.$emit('input', this.fileList.map(item => item.url))
    },
    delFile (index) {
      this.fileList.splice(index, 1)
      this.$emit('input', this.fileList.map(item => item.url))
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .upload-file {
    .add-file {
      margin-right: 25px;
      width: 100px;
      height: 100px;
      background-color:#f5f5f5;
      font-size: 80px;
      line-height: 90px;
      text-align:center;
      color:#999;
    }
    .pic-user {
      margin-right: 25px;
      width: 100px;
      height: 100px;
      border-radius: 8px;
      position: relative;
      display: inline-block;
      .del-icon {
        width: 22px;
        height: 22px;
        position: absolute;
        z-index: 99;
        right: 0px;
        top: 0px;
        background: url('./img/del-icon.png') no-repeat;
        background-size: 100%;
      }
      p {
        bottom: 0;
        left: 0;
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 100%;
        position: absolute;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        font-size: 20px;
      }
      img {
        width: 100px;
        height: 100px;
        border-radius: 4px;
        display: block
      }
    }
  }
</style>
