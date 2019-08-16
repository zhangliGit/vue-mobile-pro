<template>
  <div class="no-data qui-fx-ac-jc">
    <div>
      <img class="no-data-img" :src="noData" alt="">
    </div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import noData from './img/no-data.png'
export default {
  name: 'NoData',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      noData
    }
  }
}
</script>

<style lang="less" scoped>
  .no-data {
    padding: 120px 0;
    font-size: 20px;
    color:#999;
    .sj-icon {
      font-size: 100px;
    }
    .no-data-img {
      width: 387px;
      height: 278px;
      display: block
    }
    p {
      text-align: center;
      padding: 10px 0
    }
  }
</style>
