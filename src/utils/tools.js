/**
 * @description 常用工具函数
 */
import Vue from 'vue'
const vm = new Vue({})
const tools = {
  // 时间转化
  gmtToDate(t) {
    let d = new Date(t)
    const date =
      d.getFullYear() +
      '/' +
      (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) +
      '/' +
      (d.getDate() > 9 ? d.getDate() : '0' + d.getDate()) +
      ' ' +
      (d.getHours() > 9 ? d.getHours() : '0' + d.getHours()) +
      ':' +
      (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes())
    return date
  },
  // 延迟处理方法
  goNext: fn => {
    setTimeout(() => {
      fn()
    }, 1200)
  },
  // confirm确定框
  delTip: (message, fn) => {
    vm.$dialog
      .confirm({
        title: '温馨提示',
        message: message
      })
      .then(() => {
        if (fn) fn()
      })
      .catch(() => {})
  },
  // 列表数据加载(分页)
  loadMoreData(type, fn, params, data, cb) {
    if (type) {
      if (!this.isNextPage) {
        this.$toast({
          message: '暂无更多数据',
          position: 'bottom'
        })
        return
      }
      this[params].page++
    } else {
      console.log(this)
      this[params].page = 1
    }
    this[fn]({
      ...this[params]
    }).then(res => {
      if (type) {
        this[data] = this[data].concat(res.data)
      } else {
        this[data] = res.data
      }
      this.isNextPage = res.hasNextPage
      this.$nextTick(() => {
        this.$refs.scrollList.refresh()
        if (cb) cb()
      })
    })
  },
  // 数据加载完毕
  loadEnd() {
    vm.$toast({
      message: '数据已加载完毕',
      position: 'bottom'
    })
  }
}

export default tools
