<template>
  <div class="echarts qui-fx-ver">
    <div
    class="total-bi"
    :id="id"
    :style="{height:height+'px'}">
    </div>
  </div>
</template>
<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
export default {
  name: 'echarts-pie',
  props: {
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    height: {
      type: String,
      default: '200'
    },
    id: {
      type: String,
      default: ''
    },
    format: {
      type: Function,
      default: (value) => {
        return value
      }
    }
  },
  methods: {
    drawLine (legendData, data, size = '80%', position = ['45%', '45%'], legendPosition = ['70%', '15%']) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById(this.id))
      // 绘制图表
      myChart.setOption({
        color: this.color,
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          x: legendPosition[0],
          y: legendPosition[1],
          data: legendData,
          formatter: this.format(name, data)
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: size,
            center: position,
            data: data,
            label: {
              normal: {
                show: false
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .echarts {
    .total-bi {
      display: block
    }
  }
</style>
