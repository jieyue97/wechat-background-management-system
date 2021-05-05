<template>
  <div class="base-table full-box" v-loading="loading">
    <el-table ref="table" v-bind="$attrs" v-on="$listeners" :height="tableHeight">
      <slot></slot>
    </el-table>
    <el-pagination
      ref="page"
      v-if="showPage"
      style="text-align:right;padding: 10px 0"
      background
      :current-page.sync="page.currentPage"
      :page-sizes="[10, 20, 30, 50, 100]"
      :page-size.sync="page.pageSize"
      :total="page.total"
      :layout="'total, sizes, prev, pager, next, jumper'"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
/**
 * events
 * on-load 请求数据
 */
import { debounce } from "@/utils/tools";
export default {
  name: "BaseTable",
  props: {
    showPage: {
      type: Boolean,
      default: true
    },
    page: {
      type: Object,
      default() {
        return {
          total: 0,
          pageSize: 10,
          currentPage: 1
        };
      }
    }
  },
  data() {
    return {
      loading: false, // 表格加载动画
      tableHeight: undefined
    };
  },
  mounted() {
    this.setTableHeight();
    window.onresize = debounce(this.setTableHeight);
    this.loading = true;
    this.$emit("on-load", this.done, "mounted");
  },
  methods: {
    // 完成
    done() {
      this.loading = false;
    },
    // 计算表格高度
    setTableHeight() {
      this.$nextTick(() => {
        let thisTop = this.$refs.table.$el.getBoundingClientRect().top;
        let pageDom = this.$refs.page;
        let pageHeight =
          this.showPage && pageDom ? pageDom.$el.offsetHeight + 20 : 0;
        this.tableHeight = window.innerHeight - thisTop - pageHeight - 20;
      });
    },
    handleSizeChange(pageSize) {
      this.loading = true;
      this.$emit("update:page", { ...this.page, currentPage: 1, pageSize });
      this.$emit("on-load", this.done, "size-change");
    },
    handleCurrentChange(currentPage) {
      this.loading = true;
      this.$emit("update:page", { ...this.page, currentPage });
      this.$emit("on-load", this.done, "current-change");
    }
  }
};
</script>

<style>
</style>