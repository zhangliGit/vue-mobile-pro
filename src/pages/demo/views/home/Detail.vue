<template>
  <div class="detail">
    {{detail.content}}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'detail',
  data () {
    return {
      detail: {}
    }
  },
  watch: {
  },
  methods: {
    ...mapActions('Home', [
      'getDetail'
    ])
  },
  mounted () {
    this.getDetail().then(data => {
      this.detail = data
    })
  }
}
</script>

<style lang="less" scoped>
  .detail {
    padding: 32px;
    line-height: 40px;
  }
</style>
