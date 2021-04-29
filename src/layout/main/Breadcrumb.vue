<template>
  <div class="breadcrumb-container">
    <div class="breadcrumb-content">
      <span
        class="breadcrumb__item"
        v-for="(item, index) in currentRoutePathNameList"
        :key="index"
        >{{ item }}</span
      >
    </div>
    <div class="search-menu">
      <el-input
        v-model="searchKeyword"
        placeholder="搜索菜单"
        size="small"
        suffix-icon="el-icon-search"
        clearable
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-name",
  props: {},
  computed: {},
  data() {
    return {
      currentRoutePathNameList: [],
      searchKeyword: "",
    };
  },
  watch: {
    $route: {
      handler(val) {
        let itemData = this.findItem(this.$store.getters.routes, val.path);
        this.currentRoutePathNameList = this.getNameList(itemData);
      },
      immediate: true,
    },
  },
  methods: {
    // 搜索
    searchHandle() {},
    getNameList(data, res = []) {
      data.forEach((item) => {
        if (!item.isUserCreate) {
          res.push(item.name);
        }
        if (item.children && item.children.length) {
          this.getNameList(item.children, res);
        }
      });
      return res;
    },
    findItem(data, val, isChild = false) {
      let resData = data.filter((item) => {
        if (val == item.path) {
          return true;
        }
        if (item.children && item.children.length) {
          return this.findItem(item.children, val, true).length ? true : false;
        }
      });
      return resData;
    },
  },
  created() {},
};
</script>

<style lang='scss' scoped>
.breadcrumb-container {
  margin-bottom: 10px;
  padding: 0 10px;
  box-shadow: $systemBorderShadow;
  border-bottom: 1px solid $systemActiveBackgroundColor;
  display: flex;
  justify-content: space-between;
  height: $breadcrumbHeight;
  line-height: $breadcrumbHeight;
  .breadcrumb-content {
    display: flex;
    align-items: center;
    height: 100%;
    .breadcrumb__item {
      font-size: 16px;
      white-space: nowrap;
      &::after {
        content: "/";
        margin: 0 10px;
        font-size: 12px;
        color: $systemFontColor1;
      }
      &:nth-last-child(1) {
        color: $systemActiveFontColor;
        &::after {
          content: "";
        }
      }
    }
  }
  .search-menu {
    height: 100%;
    display: flex;
  }
}
</style>