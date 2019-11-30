<template>
  <div class="upload-file qui-fx-ac">
    <div class="qui-fx">
      <div class="pic-user qui-fx-ac-jc" @click="delFile(index)" v-for="(item, index) in fileList" :key="item.id" >
        <div class="del-icon"></div>
        <img :src="item.url" alt="" id="iosphoto">
      </div>
    </div>
    <van-uploader :after-read="afterRead" v-if="fileList.length < maxNum">
      <div icon="photo" class="add-file">+</div>
    </van-uploader>
  </div>
</template>
<script>
import EXIF from 'exif-js'
import { Uploader } from 'vant'
export default {
  name: 'UploadFile',
  components: {
    [Uploader.name]: Uploader
  },
  props: {
    maxNum: {
      type: Number,
      default: 3
    },
    isCompress: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 640
    },
    height: {
      type: Number,
      default: 960
    },
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    fileList: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  data () {
    return {
      Orientation: null
    }
  },
  mounted () {
  },
  methods: {
    afterRead (file) {
      if (!this.isCompress) {
        this.fileList.push({
          id: Math.floor(Math.random() * 1000000),
          url: file.content
        })
        return
      }
      let img = new Image()
      img.src = file.content
      let that = this
      img.onload = function () {
        EXIF.getData(this, function () {
          that.Orientation = EXIF.getTag(this, 'Orientation')
          that.ctxWidth = that.width
          that.ctxHeight = that.height
          that.ontpys(img)
        })
      }
    },
    delFile (index) {
      this.fileList.splice(index, 1)
    },
    // 压缩图片的方法
    ontpys (img) {
      let quality = 0.6 // 压缩质量
      let canvas = document.createElement('canvas')
      let drawer = canvas.getContext('2d')
      canvas.width = this.ctxWidth
      canvas.height = this.ctxHeight
      if ([5, 6, 7, 8].includes(this.Orientation)) {
        canvas.width = this.ctxHeight
        canvas.height = this.ctxWidth
      }
      switch (this.Orientation) {
      case 2:
        drawer.transform(-1, 0, 0, 1, this.ctxWidth, 0)
        break
      case 3:
        drawer.transform(-1, 0, 0, -1, this.ctxWidth, this.ctxHeight)
        break
      case 4:
        drawer.transform(1, 0, 0, -1, 0, this.ctxHeight)
        break
      case 5:
        drawer.transform(0, 1, 1, 0, 0, 0)
        break
      case 6:
        drawer.transform(0, 1, -1, 0, this.ctxHeight, 0)
        break
      case 7:
        drawer.transform(0, -1, -1, 0, this.ctxHeight, this.ctxWidth)
        break
      case 8:
        drawer.transform(0, -1, 1, 0, 0, this.ctxWidth)
        break
      default:
        drawer.transform(1, 0, 0, 1, 0, 0)
      }
      drawer.drawImage(img, 0, 0, this.ctxWidth, this.ctxHeight)
      let base64 = canvas.toDataURL('image/jpeg', quality)
      this.fileList.push({
        id: Math.floor(Math.random() * 1000000),
        url: base64
      })
    }
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
