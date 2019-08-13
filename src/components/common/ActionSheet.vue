<template>
  <van-action-sheet
    :title="title"
    v-model="actionTag"
    :actions="actionList"
    @select="onSelect"
  />
</template>

<script>
export default {
  name: 'ActionSheet',
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    actionList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    actionTag: {
      get () {
        return this.value
      },
      set () {
        this.$emit('input', false)
      }
    }
  },
  methods: {
    onSelect (a) {
      this.$emit('input', false)
      this.$emit('select', a)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
