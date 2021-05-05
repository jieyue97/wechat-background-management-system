<template>
  <BaseContainer>
    <BaseTable @on-load="onLoad" :data="tableData">
      <el-table-column type="index" label="序号" width="70" align="center"></el-table-column>
      <el-table-column v-for="item in tableColumns" :key="item.prop" v-bind="item"></el-table-column>
      <el-table-column label="操作" width="120" align="center">
        <template slot-scope="{ row }">
          <el-button type="text" size="mini" @click="clickDetail(row)">
            <i class="el-icon-document"></i> 查看
          </el-button>
        </template>
      </el-table-column>
    </BaseTable>
  </BaseContainer>
</template>

<script>
import tableMixin from "@/mixin/tablePage";
var getList = params => {
  return new Promise(resolve => {
    resolve({ code: 200, data: [] });
  });
};
export default {
  name: "UserList",
  mixins: [tableMixin],
  data() {
    return {
      queryParams: {},
      tableColumns: [
        {
          label: "用户姓名",
          prop: "userName",
          width: "120"
        },
        {
          label: "用户机构",
          prop: "deptName",
          width: "150"
        },
        {
          label: "用户单位",
          prop: "tenantName",
          width: "150"
        },
        {
          label: "操作内容",
          prop: "name",
          minWidth: "200"
        },
        {
          label: "操作时间",
          prop: "createTime",
          width: "170"
        }
      ]
    };
  }
};
</script>

<style>
</style>