<template>
  <div class="qui-fx-f1 qui-fx-ver">
    <div class="submit-form qui-fx-f1">
      <div class="submit-item qui-fx-ac qui-bd-b">
        <div class="tip">姓名</div>
        <div class="submit-input qui-fx-f1">
          <input class="input" v-model="dataForm.name" type="text" placeholder="请输入姓名" />
        </div>
      </div>
      <div class="submit-item qui-fx-ac qui-bd-b">
        <div class="tip">电话</div>
        <div class="submit-input qui-fx-f1">
          <input class="input" v-model="dataForm.phone" type="tel" placeholder="请输入电话" />
        </div>
      </div>
      <div class="submit-item qui-fx-ac qui-bd-b">
        <div class="tip">住址</div>
        <div class="submit-input qui-fx-f1">
          <input class="input" v-model="dataForm.address" type="text" placeholder="请输入住址" />
        </div>
      </div>
      <div class="submit-item qui-fx-ac qui-bd-b">
        <div class="tip">备注</div>
        <div class="submit-input qui-fx-f1">
          <input class="input" v-model="dataForm.remarks" type="text" placeholder="请输入备注" />
        </div>
      </div>
      <div class="submit-area qui-fx-ver">
        <div class="tip">订货信息</div>
        <div class="qui-fx-f1">
          <textarea class="text-area" v-model="dataForm.orderInfo" placeholder="请输入订货信息"></textarea>
        </div>
      </div>
    </div>
    <div class="submit-bottom" v-if="isOrder === 'yes'">
      <div class="submit-button" @click="submitForm">提交</div>
    </div>
  </div>
</template>
<script>
import validateForm from '@u/validate'
import { mapActions, mapState, mapMutations } from 'vuex'
const yzForm = {
  name: '请输入姓名',
  address: '请输入住址',
  phone: '请输入手机号码',
  orderInfo: '请输入订货信息'
}
const tjForm = {
  name: '',
  phone: '',
  orderInfo: '',
  address: '',
  remarks: ''
}
export default {
  name: 'OrderSubmit',
  data() {
    return {
      dataForm: Object.assign({}, tjForm)
    }
  },
  computed: {
    ...mapState('home', ['isOrder'])
  },
  mounted() {
    this.orderMenuList()
  },
  methods: {
    ...mapMutations('home', ['updateData']),
    ...mapActions('home', ['addOrder', 'getOrderMenu']),
    async orderMenuList() {
      const res = await this.getOrderMenu()
      if (res.data.length === 0 || (res.data.length > 0 && !res.data[0].status)) {
        this.$dialog.alert({
          title: '温馨提示',
          showConfirmButton: false,
          message: '今日菜单未发布, 暂时不能订货，请等待微信群通知...'
        })
        this.updateData({
          key: 'isOrder',
          data: 'no'
        })
      } else {
        this.updateData({
          key: 'isOrder',
          data: 'yes'
        })
      }
    },
    submitForm() {
      validateForm(yzForm, this.dataForm, async () => {
        await this.addOrder({
          ...this.dataForm,
          id: `${this.dataForm.phone}${new Date().getTime()}`,
          dateTime: this.$tools.gmtToDate(new Date().getTime()).substring(0, 10),
          dateTimes: this.$tools.gmtToDate(new Date().getTime())
        })
        this.$dialog.alert({
          title: '提交订单成功',
          message: '您可以点击右上角"查询", 搜索自己的订单信息，当天提交的订单在规定时间内可以修改'
        })
        this.dataForm = Object.assign({}, tjForm)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.tip-error {
  padding: 30px;
  line-height: 50px;
  color: #666;
}
.submit-form {
  .mar-t20 {
    margin-top: 20px;
  }
  .tip::before {
    position: absolute;
    content: '*';
    color: #ff0000;
    left: -20px;
    top: 4px;
    z-index: 99;
  }
  .submit-item {
    background-color: #fff;
    height: 95px;
    padding: 0px 25px 0px 40px;
    .submit-input {
      color: #666;
      margin-left: 30px;
      .input {
        text-align: right;
        width: 100%;
        border: none;
        height: 66px;
        line-height: 66px;
      }
    }
  }
  .submit-area {
    background-color: #fff;
    padding: 30px 25px 0px 40px;
    .text-area {
      margin-top: 20px;
      height: 500px;
      border: none;
      width: 100%;
      color: #666;
    }
  }
  .upload-list {
    padding: 20px 0;
  }
  .submit-bottom {
    background-color: #fff;
    padding: 25px 20px;
  }
}
.submit-button {
  margin: 40px 20px 0px 20px;
  height: 80px;
  line-height: 80px;
  border-radius: 8px;
  color: #fff;
  background-color: @main-color;
  text-align: center;
}
</style>
