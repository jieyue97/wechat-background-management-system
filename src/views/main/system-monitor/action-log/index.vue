<template>
  <BaseContainer>
    <el-form ref="form" :inline="true" slot="header" :model="queryFormData">
      <el-form-item label="用户名称">
        <el-input
          v-model.trim="queryFormData.userName"
          placeholder="用户名称"
          @keyup.native.enter="searchTable"
        ></el-input>
      </el-form-item>
      <el-form-item label="操作内容">
        <el-input v-model.trim="queryFormData.name" placeholder="操作内容" @keyup.native.enter="searchTable"></el-input>
      </el-form-item>
      <el-form-item label="操作时间">
        <el-date-picker
          value-format="yyyy-MM-dd HH:mm:ss"
          @change="dateChangeHandle"
          v-model="queryFormData.date"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <SearchBtn @search="searchHandle" @reset="resetForm"></SearchBtn>
      </el-form-item>
    </el-form>
    <BaseTable :data="tableData">
      <el-table-column type="index" label="序号" width="70" align="center" :index="indexMethod"></el-table-column>
      <el-table-column v-for="item in tableColumns" :key="item.prop" v-bind="item"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120" align="center">
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
export default {
  name: "ActionLog",
  // components: { ShowLogDialog, ElInputTree },
  data() {
    return {
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      queryFormData: {
        ip: "",
        name: "",
        tenantId: "",
        userName: "",
        date: ""
      },
      tableData: [
        {
          id: "1387227527985414146",
          name: "数据汇聚-新增",
          reponseTime: 3.057,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-28 10:09:50",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-28T10:09:50.737",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "127.0.0.1",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1387227248770596866",
          name: "数据汇聚-新增",
          reponseTime: 0.577,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-28 10:08:44",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-28T10:08:44.17",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "127.0.0.1",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1387227202914271233",
          name: "数据汇聚-新增",
          reponseTime: 0.704,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-28 10:08:33",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-28T10:08:33.238",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "127.0.0.1",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1387227106675965953",
          name: "数据汇聚-新增",
          reponseTime: 0.612,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-28 10:08:10",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-28T10:08:10.274",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "127.0.0.1",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1387013617088905218",
          name: "数据汇聚-新增",
          reponseTime: 1.131,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 19:59:50",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T19:59:50.406",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.6.67",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386997697301889025",
          name: "数据汇聚-新增",
          reponseTime: 1.337,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 18:56:34",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T18:56:34.833",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.6.67",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386997089312358402",
          name: "数据汇聚-新增",
          reponseTime: 1.065,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 18:54:09",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T18:54:09.878",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.6.67",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386996806280724481",
          name: "数据汇聚-新增",
          reponseTime: 0.024,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 18:53:02",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T18:53:02.391",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.6.67",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386984071987904513",
          name: "数据汇聚-新增",
          reponseTime: 2.178,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 18:02:26",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T18:02:26.246",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.6.67",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386949498751074306",
          name: "数据入库-新增",
          reponseTime: 2.014,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 15:45:03",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T15:45:03.405",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/lib/import",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.5.25",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386948591657336834",
          name: "数据质检-重新质检",
          reponseTime: 0.005,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 15:41:27",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T15:41:27.135",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/quality-task/restart",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.5.25",
          paras: '{"ids":"1386930754440052737"}',
          startTime: "",
          endTime: ""
        },
        {
          id: "1386947939258515457",
          name: "数据汇聚-新增",
          reponseTime: 0.972,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 15:38:51",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T15:38:51.59",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/save",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.5.25",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386946701053837313",
          name: "数据汇聚-新增",
          reponseTime: 0.728,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 15:33:56",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T15:33:56.384",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.5.25",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386938017162641410",
          name: "数据汇聚-新增",
          reponseTime: 0.022,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 14:59:25",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T14:59:25.965",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.6.67",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386935381021605890",
          name: "数据汇聚-新增",
          reponseTime: 0.019,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 14:48:57",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T14:48:57.465",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.6.67",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386935371613782018",
          name: "数据汇聚-新增",
          reponseTime: 0.026,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 14:48:55",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T14:48:55.2",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.6.67",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386934940724543490",
          name: "数据汇聚-新增",
          reponseTime: 1.343,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 14:47:12",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T14:47:12.467",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/save",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "127.0.0.1",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386934863398354945",
          name: "数据汇聚-新增",
          reponseTime: 0.918,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 14:46:54",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T14:46:54.052",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "127.0.0.1",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386933933823148033",
          name: "数据汇聚-新增",
          reponseTime: 0.008,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 14:43:12",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T14:43:12.437",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.6.27",
          paras: "{}",
          startTime: "",
          endTime: ""
        },
        {
          id: "1386933726804885505",
          name: "数据汇聚-新增",
          reponseTime: 0.008,
          createUser: "1344472903726403586",
          userName: " 张冬雨",
          createTime: "2021-04-27 14:42:23",
          updateUser: "1344472903726403586",
          updateTime: "2021-04-27T14:42:23.071",
          hasError: 0,
          errorFile: "",
          targetPath: "",
          url: "/converge/verifyData",
          tenantId: "151310",
          tenantName: "廉江市自然资源局",
          deptId: "1344472899527905282",
          deptName: "科技信息处",
          ip: "10.1.6.27",
          paras: "{}",
          startTime: "",
          endTime: ""
        }
      ],
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
          label: "IP地址",
          prop: "ip",
          width: "150"
        },
        {
          label: "操作时间",
          prop: "createTime",
          width: "170"
        },
        {
          label: "接口地址",
          prop: "url",
          width: "300"
        },

        {
          label: "响应时间(秒)",
          prop: "reponseTime",
          width: "120"
        },
        {
          label: "请求参数",
          prop: "paras",
          width: "300"
        }
      ]
    };
  },
  computed: {
    rowData() {
      return this.tableColumns.map(item => {
        item.value = this.showRowData[item.prop];
        return item;
      });
    },
    formParams() {
      return {
        size: "medium",
        clearable: true
      };
    },
    formEvent() {
      return {
        change: this.searchTable
      };
    }
  },
  created() {},
  mounted() {},
  methods: {
    searchHandle() {
      this.page.currentPage = 1;
      this.searchTable();
    },
    // 重置表单
    resetForm() {
      this.queryFormData = {
        ip: "",
        name: "",
        tenantId: "",
        userName: "",
        date: ""
      };
      this.searchHandle();
    },
    // 时间改变
    dateChangeHandle(e) {
      if (e && e.length) {
        this.queryFormData.startTime = e[0];
        this.queryFormData.endTime = e[1];
      } else {
        this.queryFormData.startTime = "";
        this.queryFormData.endTime = "";
      }
      // this.searchTable();
    },
    handleSizeChangeFile(val) {
      this.page.currentPage = 1;
      this.page.pageSize = val;
      this.searchTable();
    },
    handleCurrentChangeFile(val) {
      this.page.currentPage = val;
      this.searchTable();
    },
    searchTable() {
      let obj = {
        current: this.page.currentPage,
        size: this.page.pageSize,
        ...this.queryFormData
      };
      delete obj.date;
      getOperateLogList(obj).then(res => {
        this.tabledata = res.data.data.records;
        this.page.total = res.data.data.total;
        this.page.pageSize = res.data.data.size;
        this.page.currentPage = res.data.data.current;
      });
    },
    setTableMaxHeight() {
      const conH = this.$el.offsetHeight;
      const cutC = this.$el.querySelector(".action-log-head");
      if (cutC) {
        console.log(cutC.offsetHeight, 999);
        this.tableMaxHeight = conH - cutC.offsetHeight - 15 - 15 - 62 + "px";
      }
    },
    indexMethod(i) {
      return i + 1 + (this.page.currentPage - 1) * this.page.pageSize;
    },
    clickDetail(row) {
      // this.$router.push({
      //   name: "see-template-metadata",
      //   query: {
      //     name: "查看元数据详情",
      //     id: row.id,
      //     ori: this.$route.fullPath || this.$route.path,
      //   },
      // });
      this.showRowData = { ...row };
      this.showLogDialog = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.el-input-with-label {
  display: flex;
  margin-right: 15px;
  line-height: 36px;
  span {
    white-space: nowrap;
  }
}
/deep/.el-form-item {
  margin-bottom: 15px;
}
.action-log-head {
  display: flex;
}
.action-log-foot {
  padding: $size10;
  text-align: end;
}
</style>