<template>
  <div class="echarts qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <echart-pie ref="draw" :color="color" :data="data" :id="id" :format="format"></echart-pie>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import EchartPie from '@c/common/Pie'

export default {
  name: 'EchartsCom',
  components: {
    HeaderCom,
    EchartPie
  },
  data () {
    return {
      color: ['#d4cef1', '#9a9aea', '#d1ace5'],
      id: 'total-pic',
      size: '80%',
      position: ['40%', '50%'],
      data: [
        { value: 335, name: '多媒体' },
        { value: 310, name: '桌椅类' },
        { value: 234, name: '建筑类' },
        { value: 135, name: '水电类' },
        { value: 148, name: '易碎品' }],
      legendData: ['多媒体', '桌椅类', '建筑类', '水电类', '易碎品']
    }
  },
  mounted () {
    this.draw()
  },
  methods: {
    format (name, data) {
      return name
    },
    draw () {
      this.$refs.draw.drawLine(this.legendData, this.data, this.size, this.position)
    }
  }
}
</script>

<style lang="less" scoped>
</style>

