<template>
  <div class="layout-header">
    <div class="header-left text-linear-gradient">
      {{ system.title
      }}<i
        @click="changeCollapse"
        :class="
          $store.getters.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'
        "
      ></i>
    </div>
    <div class="header-right">
      <Clock></Clock>
      <User></User>
    </div>
  </div>
</template>

<script>
import Clock from "./Clock";
import User from "./User";
export default {
  name: "LayoutHeader",
  props: {},
  computed: {},
  components: {
    User,
    Clock,
  },
  data() {
    return {};
  },
  methods: {
    changeCollapse() {
      this.$store.commit("SET_COLLAPSE");
    },
  },
  created() {},
};
</script>

<style lang='scss' scoped>
.layout-header {
  padding: 0 20px;
  height: $topHeight;
  display: flex;
  background-image: linear-gradient(
    to left,
    rgba(0, 249, 255, 0.1),
    rgba(0, 249, 255, 0.2),
    rgba(0, 249, 255, 0.1)
  );
  justify-content: space-between;
  line-height: $topHeight;
  .header-left {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 0px;
    cursor: pointer;
    i {
      margin-left: 10px;
    }
  }
  .header-right {
    display: flex;
  }
}
</style>