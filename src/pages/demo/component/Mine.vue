<template>
  <div class="person">
    <div class="person-info qui-fx fx-ac co-bd-b">
      <div class="person-logo">Qui</div>
      <div class="fx-f1 person-name">我是Qui</div>
      <div><i class="iconfont iconxiangyou"></i></div>
    </div>
  </div>
</template>

<script>
import ScrollList from '@c/ScrollList'
export default {
  name: 'list',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .person-info {
    background-color: #fff;
    padding: .8rem .5rem;
  }
  .person-name {
    color: #666;
    margin-left: 20px
  }
  .person-logo {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    background: #cccccc;
    border-radius: 100%;
    color:#fff;
    font-size: 1rem
  }
</style>
