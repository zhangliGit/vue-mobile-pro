<template>
  <div class="echarts qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <echart-line ref="draw" :color="color" :id="id" :format="format"></echart-line>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import EchartLine from '@c/common/Line'

export default {
  name: 'EchartsCom',
  components: {
    HeaderCom,
    EchartLine
  },
  data () {
    return {
      color: ['#d4cef1', '#9a9aea'],
      id: 'total-pic',
      size: [50, 20, 20, 20],
      yData: [
        {
          name: '进校时间',
          type: 'line',
          smooth: true,
          data: [300, 280, 250, 260, 270, 300, 550, 500]
        },
        {
          name: '离校时间',
          type: 'line',
          smooth: true,
          data: [390, 400, 500, 600, 750, 800, 700, 600]
        }
      ],
      xData: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45'],
      legendData: ['进校时间', '离校时间'],
      yName: '人/次',
      yStep: 50
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
      this.$refs.draw.drawLine(this.legendData, this.xData, this.yData, this.size, this.yName, this.yStep)
    }
  }
}
</script>

<style lang="less" scoped>
</style>

