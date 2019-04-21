<template>
  <div class="person">
    <div class="qui-fx person-card qui-bd-1px">
      <div class="person-pictrue"></div>
      <div class="fx-f1">
        <div class="person-type">访客</div>
        <div class="person-name">张立</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .person-card {
    margin: 20px;
    padding: 30px;
    .person-pictrue {
      margin-right: 40px;
      width: 120px;
      height: 120px;
      background: #ccc;
      border-radius: 10px;
    }
    .person-type {
      color: #333;
    }
    .person-name {
      font-size: 34px;
      margin-top: 20px;
      color: #333;
    }
  }
</style>
