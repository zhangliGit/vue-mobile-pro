<template>
  <div class="level-scroll qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <div class="qui-fx-f1 qui-of">
      <level-scroll>
        <div class="scroll-contain">
          <ul>
            <li v-for="i in 12" :key="i">{{ i }}</li>
          </ul>
        </div>
      </level-scroll>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import LevelScroll from '@c/common/LevelScroll'
export default {
  name: 'ScrollListCom',
  components: {
    LevelScroll,
    HeaderCom
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .level-scroll {
    .contain {
      white-space: nowrap;
      min-width: 1000px;
      background-color:#fff;
      padding: 20px;
      li {
        background-color:#ccc;
        margin-right: 20px;
        width: 100px;
        height: 100px;
        border-radius: 8px;
        display: inline-block;
      }
    }
  }
</style>

