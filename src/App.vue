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
    <cus-table :tableData="tableData"> </cus-table>
  </div>
</template>

<script>
import Test from './components/test.vue'
import Table from './components/table.vue'

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
      fetch('/api/helloworld')
        .then(res => {
          return res.json();
        })
        .then(myJson => {
          console.log(myJson);
          tableData = myJson;
        })
    }
  },
  components: {
    'test': Test,
    'cus-table': Table
  },
  data: {
    msg: "can i change???? !",
    tableData: [
      {
        name: "yanbin",
        age: 18,
        date: '1998-03-16'
      },
      {
        name: "zyy",
        age: 19,
        date: '1998-03-16'
      }
    ]
  }

}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  /* text-align: center; */
}
</style>
