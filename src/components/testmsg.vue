<template>
  <div id="testmsg">
    <input type="text" v-model="msg">

    <vue-my-message :msg="msg"></vue-my-message>
  </div>
</template>

<script>
export default {
  name: 'testmessage',
  data () {
    return {
      msg: '这个是默认消息'
    }
  },
  methods: {

  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
