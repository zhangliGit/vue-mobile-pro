<template>
  <div class="qui-page qui-flex-ver">
    <header-com title="详情" isBack></header-com>
    <div class="qui-fx-f1 detail">
      <p>姓名：{{detail.name}}</p>
      <p>性别：{{detail.sex}}</p>
      <p>年龄：{{detail.age}}</p>
      <p>体温：{{detail.number}}</p>
      <p>住址：{{detail.address}}</p>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@com/HeaderCom'
import { store, actions } from '../../store'
export default {
  name: 'Detail',
  components: {
    HeaderCom
  },
  computed: {
    count: () => store.count
  },
  data() {
    return { detail: {} }
  },
  async mounted() {
    const res = await actions.getDetail()
    this.detail = res.data
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.detail {
  padding: 15px 20px;
  line-height: 60px;
  color: #666;
}
</style>
