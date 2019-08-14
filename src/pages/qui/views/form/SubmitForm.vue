<template>
  <div class="submit-form qui-page qui-fx-ver">
    <header-com isBack :title="$route.query.title"></header-com>
    <div class="qui-fx-f1 qui-fx">
      <submit-form></submit-form>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../../component/HeaderCom'
import SubmitForm from '@c/common/SubmitForm'
export default {
  name: 'SubmitFromCom',
  components: {
    HeaderCom,
    SubmitForm
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.submit-form {

}
</style>

