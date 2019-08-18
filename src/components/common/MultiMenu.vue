<template>
    <div>
      <div id="multiMenu">请选择</div>
    </div>
</template>

<script>
import MobileSelect from 'mobile-select'

export default {
  name: 'MultiMenu',
  props: {
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
  mounted () {
    const _self = this
    let mobileSelect = new MobileSelect({
      trigger: '#multiMenu',
      title: _self.title,
      wheels: [{
        data: _self.selectList
      }
      ],
      keyMap: {
        id: 'id',
        value: 'title',
        childs: 'children'
      },
      callback: function (indexArr, data) {
        console.log(data)
        _self.$emit('input')
      }
    })
  }
}
</script>

<style lang="less">
.mobileSelect .content .btnBar .ensure {
  color: @main-color;
  font-size: 14PX
}
.mobileSelect .content .btnBar .cancel  {
  color:#fff;
}
.mobileSelect .content .btnBar .title {
  font-size: 16PX
}
.mobileSelect .content .fixWidth {
  width: 100%;
}
.mobileSelect .content .btnBar {
  border-color:#ebedf0 !important
}
.mobileSelect .content .panel .selectLine {
  border-color: #ebedf0 !important
}
</style>
