<template>
    <div class="calendar-box" ref="body">
      <!-- calendar-header 显示周列表头 -->
      <div class="qui-fx-ac year-header">
        <div @click="changeMonth('prev')">上一月</div>
        <div class="qui-fx-f1 qui-tx-c" style="font-weight: bold; font-size: 16PX">
          {{currentYear}}-{{currentMonth}}-{{currentDate}}
        </div>
        <div @click="changeMonth('next')">下一月</div>
      </div>
      <div class="calendar-header">
        <span class="calendar-week" v-if="type==='START_SUN'">日</span>
        <span class="calendar-week">一</span>
        <span class="calendar-week">二</span>
        <span class="calendar-week">三</span>
        <span class="calendar-week">四</span>
        <span class="calendar-week">五</span>
        <span class="calendar-week">六</span>
        <span class="calendar-week" v-if="type==='START_MON'">日</span>
      </div>
      <!-- 日历列表 -->
      <div :class="['calendar-body showCal', {'showHeight' : isOpen}]" ref="calendar" id="calendar">
        <div class="calendar-row" v-for="(week, weekId) in sortDate" :key="weekId">
          <span :id="day ? 'day' + day.date: ''" v-for="(day, dayId) in week" :key="dayId" :class="['calendar-day', {'exception': day ?  exceptionList.indexOf(day.date) > -1: false, 'zhengchang': day ?  zcList.indexOf(day.date) > -1: false, 'current': day ? currentDate === day.date : false}]"
            @click="changeDate(day)">
            <i>{{day ? day.date : ''}}</i>
            <i>{{day ? day.lunnar : ''}}</i>
          </span>
        </div>
      </div>
      <div v-if="isToggle" class="down-icon qui-fx-ac qui-fx-jc" @click="toogleCal">
        <div :style="{transform: downStyle}">
          <img src="./img/down-icon.png" alt="">
        </div>
      </div>
    </div>
</template>

<style lang="less" scoped>
  .calendar-day {
    width: 2.2rem;
    height:2.2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 8px;
  }
  .year-header {
    height: 90px;
    padding: 0 20px;
    color:#fff;
    background-color:#7b91f4
  }
  .calendar-box {
  }
  .calendar-box i {
    font-style: normal;
  }
  .down-icon {
    height: 50px;
    background-color:#eee;
    img {
      width: 26px;
      height: 26px;
      display: block
    }
  }
  .calendar-header {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .calendar-week {
    flex: 1;
    text-align: center;
    color: #444;
    font-size: 28px;
    font-weight: bold
  }

  .calendar-body {
    background: #fff;
    transition: transform .1s linear;
  }

  .calendar-row {
    height: 3.25rem;
    padding-bottom: .85rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    transition: height .3s ease-out;
  }

  .calendar-day.current {
    width: 2.2rem;
    height: 2.2rem;
    background: #7b91f4;
    border-radius: 50%;
    color: #fff;
  }

  .calendar-day.current i:first-child {
    font-size: .75rem;
  }

  .calendar-day.current i:last-child {
    color: #fff;
  }

  .calendar-day.exception:before {
    content: '';
    width: 12px;
    height: 12px;
    background: #ffad8f;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: -.4rem;
    margin-left: -4px;
    z-index: 99;
  }
  .calendar-day.zhengchang:before {
    content: '';
    width: 12px;
    height: 12px;
    z-index: 99;
    background: @main-color;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: -.4rem;
    margin-left: -4px;
  }
  .calendar-day i:last-child {
    font-size: 20px;
    color: #8a8a8a;
  }

  .calendar-btn {
    height: 1.5rem;
    background: #fff;
    border-top: 2px solid #e9e9e9;
    text-align: center;
  }

  .calendar-btn i {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform .4s linear;
  }
  .calendar-btn.active i {
    transform: rotate(180deg);
  }
  .showCal {
    height: 3.2rem;
    -webkit-transition: height .6s ease;
    transition: height .6s ease;
    overflow: hidden;
  }
</style>

<script>
import lunnarCalc from './js/calendar'

// -> 获取本月最后一天
function getLastDate (date) {
  var newdate = new Date(date.getTime())
  var newYear = newdate.getFullYear()
  var newMonth = (newdate.getMonth()) + 1
  if (newMonth >= 12) {
    newYear += 1
    newMonth = 0
  }

  newdate.setFullYear(newYear)
  newdate.setMonth(newMonth)
  newdate.setDate(0)
  return newdate
}
// -> 获取本月第一天
function getFirstDate (date) {
  var newdate = new Date(date.getTime())
  newdate.setDate(1)
  return newdate
}
export default {
  name: 'calendar1',
  data () {
    var newd = new Date()
    return {
      dateShow: this.isDate,
      downStyle: 'rotate(180deg)',
      isOpen: true,
      // -> 标志日历的当前显示
      currentYear: newd.getFullYear(),
      currentMonth: newd.getMonth() + 1,
      currentDate: newd.getDate(),
      currentNow: newd,
      sortDate: [],
      isMonth: true,
      lastException: []
      // -> 标志现实中的日期
    }
  },
  props: {
    isToggle: {
      type: Boolean,
      default: true
    },
    isDate: {
      type: Array,
      default: function () {
        return []
      }
    },
    exceptionList: {
      type: Array,
      default: () => {
        return []
      }
    },
    zcList: {
      type: Array,
      default: () => {
        return []
      }
    },
    type: {
      type: String, // 'START_SUN START_MON' -> 从周一开始或者从周日开始
      default: 'START_SUN'
    }
  },
  computed: {
  },
  methods: {
    // 渲染日历列表
    caleList () {
      // -> 根据 this.date -> 给出日历二位数组
      var firstDay = getFirstDate(this.currentNow)
      var lastDay = getLastDate(this.currentNow)
      var sortDate = []
      var startWeekday = firstDay.getDay() // -> 获取周几 周日为0
      var weekdayNum = lastDay.getDate() // -> 获取该月的天数
      if (this.type === 'START_MON') {
        startWeekday = startWeekday === 0 ? 7 : startWeekday
      } else {
        startWeekday += 1
      }
      var year = this.currentYear
      var month = this.currentMonth
      var flag = false
      var count = 0
      var lunnar = null
      while (true) {
        var temp = []
        for (var i = 1; i < 8; i++) {
          if (i === startWeekday) {
            flag = true // -> 开始计数
          }
          if (flag) {
            if (count < weekdayNum) {
              lunnar = lunnarCalc.solar2lunar(year, month, count + 1)
              temp.push({
                date: count + 1,
                lunnar: lunnar.Term ? lunnar.Term : lunnar.IDayCn
              })
              count += 1
            } else {
              temp.push(null)
            }
          } else {
            temp.push(null)
          }
        }
        sortDate.push(temp)
        if (count >= weekdayNum) {
          break
        }
      }
      if (this.isOpen) {
        document.getElementById('calendar').style.height = 3.2 * sortDate.length + 'rem'
      }
      this.sortDate = sortDate
    },
    toogleCal () {
      if (this.isOpen) {
        this.downStyle = 'rotate(0deg)'
        document.getElementById('calendar').style.height = '3.2rem'
      } else {
        this.downStyle = 'rotate(180deg)'
        document.getElementById('calendar').style.height = 3.2 * this.sortDate.length + 'rem'
      }
      this.isOpen = !this.isOpen
      this.$emit('toggle')
    },
    changeDate (day) {
      this.currentDate = day.date
      this.$emit('get-date', { year: this.currentYear, month: this.currentMonth, day: day.date })
    },
    swipeStart () {},
    swipe (evt) {
      this.$refs.calendar.style.transform = `translateX(${evt.deltaX}px)`
    },
    swipeEnd (evt) {
      if (evt.deltaX > 100) {
        this.$refs.calendar.style.transform = 'translateX(100%)'
        this.changeMonth('prev')
        return
      }
      if (evt.deltaX < -100) {
        this.$refs.calendar.style.transform = 'translateX(-100%)'
        this.changeMonth('next')
        return
      }
      this.$refs.calendar.style.transform = 'translateX(0px)'
    },
    changeMonth (dir) {
      var currM = this.currentMonth
      if (dir === 'prev') {
        if (currM === 1) {
          this.currentYear -= 1
          this.currentMonth = 12
        } else {
          this.currentMonth -= 1
        }
      }
      if (dir === 'next') {
        if (currM === 12) {
          this.currentYear += 1
          this.currentMonth = 1
        } else {
          this.currentMonth += 1
        }
      }
      this.currentNow.setFullYear(this.currentYear)
      this.currentNow.setMonth(this.currentMonth - 1)
      this.currentNow.setDate(this.currentDate)
      this.caleList()
      this.$emit('get-date', { year: this.currentYear, month: this.currentMonth, day: this.currentDate }, true)
      this.$refs.calendar.style.transition = 'none'
      requestAnimationFrame(() => {
        if (dir === 'prev') {
          this.$refs.calendar.style.transform = 'translateX(-100%)'
        }

        if (dir === 'next') {
          this.$refs.calendar.style.transform = 'translateX(100%)'
        }

        requestAnimationFrame(() => {
          this.$refs.calendar.style.transition = 'transform .1s linear'
          this.$refs.calendar.style.transform = 'translateX(0px)'
        })
      })
    },
    setTime (day) {
      this.currentYear = day.split('-')[0]
      this.currentMonth = parseInt(day.split('-')[1])
      this.currentNow.setFullYear(this.currentYear)
      this.currentNow.setMonth(this.currentMonth - 1)
      this.currentNow.setDate(this.currentDate)
      this.caleList()
    }
  },
  mounted () {
    this.caleList()
  }
}

</script>
