<template>
  <div class="no-data qui-fx-ac-jc">
    <div class="no-data-img"></div>
    <div class="no-data-text">暂无数据~</div>
  </div>
</template>

<script>
export default {
  name: 'noData',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .no-data {
    padding: 100px 0;
  }
  .no-data-img {
    background-color: #ccc;
    width: 120px;
    height: 120px;
    display: block;
    margin: 10px 0;
  }
  .no-data-text {
    color: #dbdbdb;
    font-size: 26px;
  }
</style>
