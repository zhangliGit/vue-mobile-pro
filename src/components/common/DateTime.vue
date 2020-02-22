<template>
  <van-popup position="bottom" v-model="dateTag">
    <van-datetime-picker
      :title="title"
      :min-date="getMinDate"
      :max-date="getMaxDate"
      @confirm="confirm"
      @cancel="cancel"
      @change="change"
      v-model="currentDate"
      :type="type"
      :formatter="formatter"
    />
  </van-popup>
</template>
<script>
export default {
  name: 'DateTime',
  props: {
    minDate: {
      type: String,
      default: ''
    },
    maxDate: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '请选择'
    },
    type: {
      type: String,
      default: 'datetime'
    },
    date: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getMinDate() {
      if (!this.minDate) {
        if (this.type === 'time') {
          return '00:00'
        }
        return new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 365 * 10)
      } else {
        if (this.type === 'time') {
          return this.minDate
        }
        return new Date(this.minDate)
      }
    },
    getMaxDate() {
      if (!this.maxDate) {
        if (this.type === 'time') {
          return '24:00'
        }
        return new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365 * 10)
      } else {
        if (this.type === 'time') {
          return this.maxDate
        }
        return new Date(this.maxDate)
      }
    },
    currentDate: {
      get() {
        if (!this.date) {
          if (this.type === 'time') {
            return '00:00'
          }
          return new Date()
        } else {
          if (this.type === 'time') {
            return this.date
          }
          return new Date(this.date)
        }
      },
      set() {}
    },
    dateTag: {
      get() {
        return this.value
      },
      set() {
        this.$emit('input', false)
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    gmtDate(t) {
      let d = new Date(t)
      return (
        d.getFullYear() +
        '/' +
        (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) +
        '/' +
        (d.getDate() > 9 ? d.getDate() : '0' + d.getDate()) +
        ' ' +
        (d.getHours() > 9 ? d.getHours() : '0' + d.getHours()) +
        ':' +
        (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes())
      )
    },
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`
      } else if (type === 'month') {
        return `${value}月`
      } else if (type === 'day') {
        return `${value}日`
      } else if (type === 'hour') {
        return `${value}点`
      } else if (type === 'minute') {
        return `${value}分`
      }
      return value
    },
    confirm(date) {
      if (this.type === 'year-month') {
        date = this.gmtDate(date).substring(0, 7)
      } else if (this.type === 'datetime') {
        date = this.gmtDate(date)
      } else if (this.type === 'date') {
        date = this.gmtDate(date).substring(0, 10)
      }
      this.$emit('get-date', date)
      this.$emit('input', false)
    },
    cancel() {
      this.$emit('input', false)
    },
    change() {}
  }
}
</script>
<style lang="less" scoped></style>
