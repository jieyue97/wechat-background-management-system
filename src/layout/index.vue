<template>
  <div class="layout-container full-box">
    <Header></Header>
    <div class="layout-content">
      <Left></Left>
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Header from "./header";
import Left from "./left";
import Main from "./main";
export default {
  name: "Layout",
  props: {},
  components: {
    Header,
    Left,
    Main,
  },
  computed: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang='scss' scoped>
.layout-container {
  .layout-content {
    height: calc(100% - #{$topHeight});
    width: 100%;
    display: flex;
  }
}
</style>