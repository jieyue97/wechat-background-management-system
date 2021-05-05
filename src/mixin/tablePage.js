/**
 * 表格页面mixin
 * 需要定义： 
 * getList(params) {Function} {js方法} 查询表格数据接口方法 params:{page,query}
 * queryParams {Object} { data数据 } 查询的表单对象数据
 */
export default {
  data() {
    return {
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      dialogType: 1, // 弹框类型
      showDialog: false,// 是否显示弹框
      rowData: {},
      tableData: []
    }
  },
  methods: {
    /**
     * 查询表格数据
     * @param {*} done 完成 关闭loading
     * @param {*} eventType 触发的事件名
     */
    onLoad(done, eventType) {
      console.log( 555)
      done();
      // getList({
      //   ...this.page,
      //   ...this.queryParams
      // }).then((res) => {
      //   console.log(res, 666)
      //   // this.tableData = res.data.data.records;
      //   done();
      // })
    },
    /**
     * 打开弹框方法
     * @param {Number} dialogType 弹框类型 1:查看 2:编辑 3:新增
     */
    openDialog(dialogType) {
      this.dialogType = dialogType;
      if (this.dialogType === 3) {
        this.rowData = {};
      }
      this.showDialog = true;
    }
  }
}