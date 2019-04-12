<template>
  <div class="co-flex co-ver co-cl-1">
    <header-com :title="title"></header-com>
    <div class="co-f1 co-flex co-bg-0">
      <scroll-list>
        <div>
          <div @click="goList(item.path)" class="co-bg-0 co-pd-a08 co-bd-b1 co-flex co-jsb" v-for="item in itemList" :key="item.id">
            <div>{{item.title}}</div>
            <div>{{$store.state.name}}</div>
          </div>
        </div>
      </scroll-list>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
export default {
  name: 'CouiList',
  components: {
		HeaderCom,
		ScrollList
  },
  data () {
    return {
      title: 'Qui',
      moduleList: [
        {
          name: 'Qui文档'
        },
        {
          name: 'Qui应用'
        }
      ]
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

<style lang="less" scoped>
  .coui-list {
    background:#eee;
    .coui-list-item {
      height:2.5rem;
      width: 4rem;
      border-left: 3px #eee solid;
      border-bottom: 1px #e5e5e5 solid
    }
    .coui-list--active {
      border-left: 3px #d81e06 solid;
      background:#fff;
      color:#d81e06
    }
  }
  .demo-list {
    height:2.5rem;
    padding: 0 .6rem
  }
</style>
