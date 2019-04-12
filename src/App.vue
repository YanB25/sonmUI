<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div>
    <div>
      <el-button @click="helloworld">click me</el-button>
    </div>
    <div> 
      <test v-bind:msg="msg"> </test>
    </div>
  </div>
</template>

<script>
import Test from './components/test.vue'

// Vue.use(Test)

export default {
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    },
    helloworld() {
      fetch('http://127.0.0.1:8010/api/helloworld')
        .then(res => {
          return res.json();
        })
        .then(myJson => {
          console.log(myJson);
        })
    }
  },
  components: {
    'test': Test
  },
  data() {
    return {
      msg: "can i change???? !"
    }
  }

}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
