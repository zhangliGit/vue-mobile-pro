<template>
  <div v-if="popupTag" class="popup-dialog qui-fx-ver">
    <div
      class="popup-info qui-fx-ver"
      :style="{borderRadius: isRadius ? '4px' : 0, width: width + '%', height: height + '%', left: (100 - width) / 2 + '%', top: isCustom ? (100 - height) / 4 + '%' : (100 - height) / 2 + '%'}"
    >
      <slot name="title"></slot>
      <scroll-list ref="scrollList">
        <slot></slot>
      </scroll-list>
      <div class="qui-fx-ac">
        <div
          v-if="cancelText"
          class="qui-fx-f1 action-btn quit-btn"
          @click="cancelBtn"
        >{{cancelText}}</div>
        <div class="qui-fx-f1 action-btn confirm-btn" @click="confirmBtn">{{confirmText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollList from '@c/common/ScrollList'
export default {
  name: 'PopupBoxCom',
  components: {
    ScrollList
  },
  props: {
    isCustom: {
      type: Boolean,
      default: false
    },
    // 是否显示取消按钮
    cancelText: {
      type: String,
      default: ''
    },
    // 确认按钮
    confirmText: {
      type: String,
      default: '确定'
    },
    // 是否显示圆角
    isRadius: {
      type: Boolean,
      default: true
    },
    // 弹出框宽度
    width: {
      type: String,
      default: '85'
    },
    // 弹出框高度
    height: {
      type: String,
      default: '85'
    },
    // 显示状态
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    popupTag: {
      get() {
        return this.value
      },
      set() {
        this.$emit('input', false)
      }
    }
  },
  mounted() {},
  methods: {
    confirmBtn() {
      this.$emit('confirm')
    },
    cancelBtn() {
      this.popupTag = true
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="less" scoped>
.popup-dialog {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
}
.popup-info {
  overflow: hidden;
  background-color: #fff;
}
.action-btn {
  margin: 20px;
  background-color: @main-color;
  color: #fff;
  height: 70px;
  line-height: 70px;
  text-align: center;
  border-radius: @radius;
}
.quit-btn {
  background-color: @dark-color;
}
.confirm-btn {
  background-color: @main-color;
}
</style>
