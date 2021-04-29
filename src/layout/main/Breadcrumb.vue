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
  name: "Breadcrumb",
  data() {
    return {
      currentRoutePathNameList: [],
      searchKeyword: "",
    };
  },
  watch: {
    $route: {
      handler(val) {
        let pathList = [];
        this.findItem(this.$store.getters.routes, val.path, pathList);
        this.currentRoutePathNameList = pathList.reverse().filter(item => !item.isUserCreate).map(item => item.name);
      },
      immediate: true,
    },
  },
  methods: {
    // 搜索
    searchHandle() {},
    findItem(data, val, pathList) {
      let resData = data.filter((item) => {
        if (val == item.path) {
          return true;
        }
        if (item.children && item.children.length) {
          return this.findItem(item.children, val, pathList).length ? true : false;
        }
      });
      if (resData.length) {
        pathList.push(resData[0])
      }
      return resData;
    },
  },
};
</script>

<style lang='scss' scoped>
.breadcrumb-container {
  margin-bottom: $size10;
  padding: 0 $size10;
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
      font-size: $systemFontSize16;
      white-space: nowrap;
      &::after {
        content: "/";
        margin: 0 $size10;
        font-size: $systemFontSize12;
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