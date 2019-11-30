<template>
  <div class="echarts qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <echart-radar ref="draw" :color="color" :id="id" :format="format"></echart-radar>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import EchartRadar from '@c/common/Radar'

export default {
  name: 'EchartsCom',
  components: {
    HeaderCom,
    EchartRadar
  },
  data () {
    return {
      color: ['#d4cef1', '#9a9aea'],
      id: 'total-pic',
      maxData: [
        { name: '销售', max: 6500 },
        { name: '管理', max: 16000 },
        { name: '信息技术', max: 30000 },
        { name: '客服', max: 38000 },
        { name: '研发', max: 52000 },
        { name: '市场', max: 25000 }
      ],
      series: [{
        name: '预算 vs 开销',
        type: 'radar',
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '预算分配',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际开销',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
          }
        ]
      }],
      legendData: ['预算分配', '实际开销'],
      position: ['50%', '50%'],
      size: 70
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
      this.$refs.draw.drawLine(this.legendData, this.maxData, this.series, this.size, this.position)
    }
  }
}
</script>

<style lang="less" scoped>
</style>

