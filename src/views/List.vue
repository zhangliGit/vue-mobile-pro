<template>
  <div class="list">
    <h1>{{ list }}</h1>
    <div @click="dialog">
      我是p元素
    </div>
    <no-data></no-data>
  </div>
</template>

<script>
import { Dialog } from "vant"
import NoData from "@c/NoData";
export default {
  name: "List",
  components: {
    NoData
  },
  data() {
    return {
      list: "我是list界面"
    };
  },
  methods: {
    dialog() {
      Dialog.alert({
        title: "标题",
        message: "弹窗内容"
      }).then(() => {
        // on close
      });
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  color: red;
  div {
    color: green;
  }
}
</style>
