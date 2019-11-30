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
require('echarts/lib/chart/line')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
export default {
  name: 'echarts-line',
  props: {
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    height: {
      type: String,
      default: '400'
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
    drawLine (legendData, xData, yData, size = [50, 20, 20, 20], yName = '', yStep = 50) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById(this.id))
      // 绘制图表
      myChart.setOption({
        title: {
          title: '堆叠区域图'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
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
