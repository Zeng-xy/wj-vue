<template>
  <div class="my-msg">
    {{msg ? msg : '我是默认的提示信息'}}
  </div>
</template>

<script>
export default {
  name: 'vue-my-msg',
  data () {
    return {

    }
  },
  props: {
    msg: {
      type: String,
      default: '我是默认的提示信息'
    }
  }
}
</script>

<style lang="scss">
  .my-msg {
    color: #c33c49;
  }
</style>
