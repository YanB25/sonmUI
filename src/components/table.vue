<template>
    <el-table
      :data="tableData"
      stripe
      height="250"
      style="width: 100%">
      <el-table-column
        v-for="(value, key, index) in tableData[0]"
        v-bind:key="index"
        :prop="key"
        :label="key"
        >
      </el-table-column>
    </el-table>
  </template>


<script>
export default {
    props: ['tableData']
}
</script>
