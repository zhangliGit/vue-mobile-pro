<template>
  <div class="scroll-lef-rit qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <div style="margin-top: 20px; background-color:#fff">
      <level-scroll>
        <ul class="scroll-list">
          <li v-for="i in 20" :key="i">
            <div class="pic" :style="{backgroundColor: '#' + Math.floor(Math.random() * 1000000)}">{{ i }}</div>
          </li>
        </ul>
      </level-scroll>
    </div>
    <div style="margin-top: 20px; background-color:#fff">
      <level-scroll>
        <ul class="level-list">
          <li><span>大别山里的一所学校里却充满了孩子爽朗的笑声</span></li>
          <li><span>上海枫叶国际学校目前开设了初中和高中,是否考虑过开设小学</span></li>
          <li><span>近日,济南市教育局、济南市体育局等部门联合印发</span></li>
        </ul>
      </level-scroll>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import LevelScroll from '@c/common/LevelScroll'
export default {
  name: 'LevelScrollCom',
  components: {
    HeaderCom,
    LevelScroll
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang = "less" scoped>
  .scroll-lef-rit {
    .container {
      white-space: nowrap;
      display:inline-block
    }
    .scrollDiv{
      width:2.6rem;
      height:2.6rem;
      -webkit-border-radius: 100%;
      border-radius: 100%
    }
    .ScrollList {
      padding:.6rem;
      display: inline-block;
    }
    .scroll-list {
      padding: 20px 0;
      white-space: nowrap;
      display:inline-block;
      background-color:#fff;
      li {
        display:inline-block;
        .pic {
          background-color:#ccc;
          border-radius: 8px;
          margin: 0 10px;
          width: 100px;
          color:#fff;
          line-height: 100px;
          text-align:center;
          height: 100px;
        }
      }
    }
    .level-list {
      display: inline-block;
      white-space: nowrap;
      li {
        display: inline-block;
        padding: 20px;
      }
    }
  }
</style>
