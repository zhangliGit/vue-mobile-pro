<template>
    <div id="header" class="header">
      <div class="header-slide qui-fx">
        <slot name="lef-btn"></slot>
      </div>
      <div class="co-header-title">{{title}}</div>
      <div class="header-slide qui-fx fx-je">
        <slot name="rit-btn"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderCom',
  props: {
    title: {
      type: String,
      default: ''
    },
    isBack: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang = "less">
  #header {
    width: 100%;
    background: #10436B;
    padding: 0 .5rem;
    text-align: center;
    display: flex;
    align-items: center;
    .header-slide {
      min-width:4rem
    }
    .co-header-title {
      flex: 1;
      color:#fff;
      font-size: .8rem;
      text-align: center;
      height: 44Px;
      line-height: 44Px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
