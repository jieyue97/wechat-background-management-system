<template>
  <div class="layout-main" :style="{ width: width }">
    <Breadcrumb></Breadcrumb>
    <div class="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "./Breadcrumb";
export default {
  name: "LayoutMain",
  components: { Breadcrumb },
  props: {},
  computed: {
    width() {
      return this.$store.getters.isCollapse
        ? "calc(100% - 64px)"
        : "calc(100% - 250px)";
    },
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang='scss' scoped>
.layout-main {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  .content-box{
    height: calc(100% - 52px);
  }
}
</style>