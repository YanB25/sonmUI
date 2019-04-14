<template>
    <!-- <el-table
      :data="tableData"
      stripe
      height="250"
      style="width: 100%">
      <el-table-column
        v-for="(value, key, index) in tableData[0]"
        v-bind:key="index"
        :prop="key"
        :label="key"
        :fixed="index == 0"
        width="200"
        >
      </el-table-column>
    </el-table> -->
    <el-table
      :data="tableData"
      stripe
      height="250"
      style="width: 100%">
      <el-table-column prop="id" label="Id" width="100" fixed>
      </el-table-column>

      <el-table-column prop="masterid" label="Master Id" :width="longwidth">
      </el-table-column>

      <el-table-column prop="dealid" label="Deal Id" :width="shortwidth">
      </el-table-column>

      <el-table-column prop="type" label="Type" :width="shortwidth">
      </el-table-column>

      <el-table-column prop="status" label="Status" :width="shortwidth">
      </el-table-column>

      <el-table-column prop="price" label="Price" :width="longwidth">
      </el-table-column>

    </el-table>

</template>


<script>
export default {
    props: ['tableData'],
    data() {
        return {
            shortwidth:100,
            longwidth: 450
        }
    }
}
</script>
