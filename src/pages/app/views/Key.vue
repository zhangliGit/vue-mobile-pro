<template>
  <div class="co-flex co-ver co-cl-1">
    <header-com isBack :title="title"></header-com>
    <div class="co-f1 co-flex co-bg-0">
      <scroll-list>
        <div>
          <div class="co-flex co-pd-a08 co-bd-b" v-for = "(item, index) in num" :key="item">
            <input type="text" />
            <div @click="del(index)">删除</div> 
          </div>
          <button @click="add">新增</button>
        </div>
      </scroll-list>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
export default {
  name: 'key',
  components: {
		HeaderCom,
		ScrollList
  },
  data () {
    return {
      title: 'key属性',
      ind: 1,
      num: [1]
    }
  },
  computed: {
  },
  methods: {
    add () {
      this.num.push(++this.ind)
    },
    del (index) {
      this.num.splice(index, 1)
    }
  },
  mounted () {
    console.log('我是key')
  }
}
</script>

<style lang="less" scoped>
</style>
