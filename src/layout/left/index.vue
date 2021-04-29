<template>
  <div class="layout-left">
    <el-menu
      class="el-menu-vertical"
      :default-active="$route.fullPath"
      @select="handleSelect"
      :collapse="$store.getters.isCollapse"
      text-color="#C0D2E6"
      active-text-color="#00F9FF"
      background-color="#012522"
      style="height: 100%"
    >
      <NavItem :menuList="menuList" :menuProps="menuProps"></NavItem>
    </el-menu>
  </div>
</template>  
<script>
import NavItem from "./NavItem";
// import { mapGetters } from "vuex";
export default {
  name: "LayoutLeft",
  props: {},
  components: {
    NavItem,
  },
  computed: {
    menuList() {
      return this.$store.getters.menuList;
    },
  },
  data() {
    return {
      menuProps: {
        icon: "icon",
        title: "title",
        value: "value",
        children: "children",
      },
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key);
    },
  },
  created() {},
};
</script>

<style lang='scss' scoped>
.layout-left {
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 250px;
  }
  /deep/.el-menu {
    border-right: none;
    .el-submenu__title,
    .el-menu-item {
      color: $systemFontColor;
      font-size: $systemFontSize;
      &:hover {
        color: #fff;
      }
    }
    .is-active {
      position: relative;
      color: $systemActiveFontColor!important;
      background: $systemActiveBackgroundColor !important;
      &:hover {
        color: $systemActiveFontColor;
      }
      &::before {
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        width: 4px;
        background: $systemActiveFontColor;
        position: absolute;
      }
    }
  }
  /deep/.el-menu--collapse {
    .el-menu-item.is-active {
      background: none !important;;
      &::before {
        display: none;
      }
    }
  }
}
</style>