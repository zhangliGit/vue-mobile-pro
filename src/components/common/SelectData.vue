<template>
  <van-popup position="bottom" v-model="selectTag">
    <van-picker
      show-toolbar
      :title="title"
      :columns="selectList"
      @cancel="selectTag = false"
      @confirm="onConfirm"
    />
  </van-popup>
</template>
<script>
export default {
  name: 'SelectData',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '请选择'
    },
    selectList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    selectTag: {
      get () {
        return this.value
      },
      set () {
        this.$emit('input', false)
      }
    }
  },
  methods: {
    onConfirm (a) {
      this.$emit('input', false)
      this.$emit('confirm', a)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
