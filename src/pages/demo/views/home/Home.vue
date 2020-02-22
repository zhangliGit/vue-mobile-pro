<template>
  <div class="home qui-page qui-fx">
    <scroll-list ref="scrollList">
      <div class="qui-fx-ac list qui-bd-b" v-for="(list, index) in dataList" :key="index">
        {{ list.name }}
      </div>
      <div>{{ count }}</div>
      <div class="btn" @click="$router.push('/detail')">详情</div>
      <div class="btn" @click="changeList">修改值</div>
      <div class="btn" @click="changeProps">改变provide传递的值</div>
      <div class="btn" @click="changeAttrs">改变attrs传递的值</div>
      <div class="btn" @click="add">累加</div>
      <child-one :foo="foo" :zoo="zoo" @change="change" v-on="$listeners" v-bind="$attrs">
        <template #item="haha">
          {{ JSON.stringify(haha) }}
        </template>
      </child-one>
      <child-two :data-list="dataList"></child-two>
      <div v-status="count">我是累加值{{ count }}</div>
    </scroll-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { store, mutations } from './store'
import ScrollList from '@c/common/ScrollList'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
const dataList = [
  {
    id: '1',
    name: '宿舍管理系统'
  },
  {
    id: '2',
    name: '访客管理系统'
  }
]
export default {
  name: 'Home',
  provide() {
    this.item = Vue.observable({
      title: 'zhangli',
      sex: '男'
    })
    return {
      item: this.item
    }
  },
  directives: {
    status: {
      bind(el, binding) {
        console.log(binding)
      },
      insert(el, binding) {},
      update(el, binding) {
        if (binding.value > 2 && binding.value < 5) {
          el.style.backgroundColor = '#ccc'
        } else if (binding.value > 5 && binding.value < 7) {
          el.style.backgroundColor = '#444'
        } else if (binding.value > 7) {
          el.style.backgroundColor = 'red'
        }
      }
    }
  },
  computed: {
    count() {
      return store.count
    }
  },
  data() {
    return {
      foo: 'hello',
      zoo: 'world',
      dataList: Object.freeze(dataList)
    }
  },
  components: {
    ScrollList,
    ChildOne,
    ChildTwo
  },
  methods: {
    log() {
      console.log('log')
    },
    add() {
      mutations.setCount()
    },
    change() {
      this.foo = 'hi'
    },
    changeProps() {
      this.item.title = 'haha'
    },
    changeAttrs() {
      this.foo = 'hi'
    },
    changeList() {
      this.dataList[0].name = 'zhangli'
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.home {
  .list {
    padding: 20px 40px;
    background-color: #fff;
  }
  .btn {
    padding: 10px 15px;
    display: inline-block;
    border-radius: 6px;
    margin: 30px;
    background-color: #ccc;
  }
}
</style>
