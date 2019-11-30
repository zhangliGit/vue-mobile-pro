<template>
  <van-dropdown-menu :active-color="activeColor">
    <van-dropdown-item v-for="(item,index) in dropdownList" :key="index" v-model="item.typeName" :options="item.list" @change="change" @open="open(index)"/>
  </van-dropdown-menu>
</template>
<script>
import { DropdownMenu, DropdownItem } from 'vant'
export default {
  name: 'DropdownMenu',
  props: {
    dropdownList: {
      type: Array,
      default: () => {
        return []
      }
    },
    activeColor: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  components: {
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem
  },
  methods: {
    change (value) {
      this.$emit('change', value)
    },
    open (index) {
      this.$emit('open', index)
    }
  }
}
</script>
<style lang="less" scoped>
  /deep/ .van-cell__title{
    text-indent: 32px;
  }
  /deep/ .van-cell:not(:last-child)::after{
    left:0;
  }
</style>

