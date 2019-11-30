<template>
  <div class="qui-fx-f1 qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <div class="top-menu">
      <dropdown-menu
        :dropdownList="dropdownList"
        :activeColor="activeColor"
        v-model="selectedItem"
        @change="screen"
        @open="activeMenu"
      ></dropdown-menu>
    </div>
  </div>
</template>
<script>
import HeaderCom from '../../component/HeaderCom'
import DropdownMenu from '@c/common/DropdownMenu'
export default {
  name: 'DropdownMenuCom',
  components: {
    DropdownMenu,
    HeaderCom
  },
  data () {
    return {
      time: 'ALL',
      status: 'ALL',
      reason: 'ALL',
      selectedItem: 'ALL',
      typeMenu: 0,
      activeColor: '#7b92f5',
      dropdownList: [
        {
          name: '全部时间',
          typeName: 'ALL',
          list: [
            {
              value: 'ALL',
              text: '全部时间'
            },
            {
              value: 'WEEK',
              text: '近一周'
            },
            {
              value: 'MONTH',
              text: '近一月'
            }
          ]
        },
        {
          name: '全部状态',
          typeName: 'ALL',
          list: [
            {
              value: 'ALL',
              text: '全部状态'
            },
            {
              value: '0',
              text: '未到访'
            },
            {
              value: '1',
              text: '拜访中'
            },
            {
              value: '2',
              text: '已签离'
            }
          ]
        },
        {
          name: '全部事由',
          typeName: 'ALL',
          list: [
            {
              value: 'ALL',
              text: '全部事由'
            },
            {
              value: '0',
              text: '面试'
            },
            {
              value: '1',
              text: '技术交流'
            },
            {
              value: '2',
              text: '商务拜访'
            },
            {
              value: '3',
              text: '其它'
            }
          ]
        }
      ]
    }
  },
  computed: {},
  methods: {
    activeMenu (index) {
      this.typeMenu = index
    },
    screen (a) {
      console.log(a)
      if (this.typeMenu === 0) {
        this.time = this.dropdownList[this.typeMenu].typeName
      } else if (this.typeMenu === 1) {
        this.status = this.dropdownList[this.typeMenu].typeName
      } else if (this.typeMenu === 2) {
        this.reason = this.dropdownList[this.typeMenu].typeName
      }
      console.log(this.time, this.status, this.reason)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
