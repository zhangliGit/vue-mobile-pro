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
require('echarts/lib/chart/radar')
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
      default: '300'
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
    drawLine (legendData, data, series, size, position) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById(this.id))
      // 绘制图表
      myChart.setOption({
        color: this.color,
        legend: {
          x: 'right',
          y: '3%',
          data: legendData
        },
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          radius: size,
          center: position,
          shape: 'circle',
          indicator: data
        },
        series: series
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
