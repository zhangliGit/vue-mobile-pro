<template>
  <div class="child-b co-mg-a08 co-pd-a08 co-bd-a co-of">
    <div>{{tag}}</div>
    <div>主题为: {{theme}}</div>
    <div>我的名字是: {{name1.title}}</div>
    <div class="">col的值是：{{col.color}}</div>
    <button @click="changeA">改变A</button>
    <child-c></child-c>
  </div>
</template>

<script>
import ChildC from './ChildC.vue'
import bus from './event'

export default {
  name: 'childB',
  components: {
    ChildC
  },
  inject: {
    name1: {
      from: 'name',
      type: Object,
      default: () => {}
    },
    col: {
      type: Object
    }
  },
  props: {
    theme: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      tag: '我是b'
    }
  },
  created () {
    bus.$on('changeB', () => {
      console.log(3)
      this.tag = '我是新b'
    })
  },
  directives: {
    'co-ref': {
      'bind': function() {
        console.log('bind')
      },
      'inserted': function() {
        console.log('inserted')
      },
      'componentUpdated': function() {
        console.log('update')
      }
    }
  },
  methods: {
    changeA () {
      this.$emit('changeC')
    }
  }
}
</script>

<style>

</style>
