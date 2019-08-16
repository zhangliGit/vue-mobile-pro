<template>
  <van-popup position="bottom" v-model="menuTag">
    <div class="multi-menu qui-fx-ac">
      <div class="qui-fx-f1 qui-fx">
        <scroll-list>
          <ul class="multi-ui">
            <li>病假</li>
            <li>病假</li>
            <li>病假</li>
            <li>病假</li>
            <li>病假</li>
            <li>病假</li>
            <li>病假</li>
            <li>病假</li>
            <li>病假</li>
            <li>病假</li>
            <li>病假</li>
            <li>病假</li>
          </ul>
        </scroll-list>
      </div>
      <div class="qui-fx-f1">
        <ul class="multi-ui">
          <li>感冒</li>
        </ul>
      </div>
      <div class="qui-fx-f1">
        <ul class="multi-ui">
          <li>传染</li>
        </ul>
      </div>
    </div>
  </van-popup>
</template>
<script>
import ScrollList from '@c/common/ScrollList'
export default {
  name: 'MultiMenu',
  components: {
    ScrollList
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    menuTag: {
      get () {
        return this.value
      },
      set () {
        this.$emit('input', false)
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    confirm (date) {}
  }
}
</script>
<style lang="less" scoped>
  .multi-menu {
    height: 300px;
    div {
      height: 300px;
    }
    .multi-ui {
      background-color:#f5f5f5;
      margin: 0 10px;
      padding: 10px;
    }
  }
</style>
