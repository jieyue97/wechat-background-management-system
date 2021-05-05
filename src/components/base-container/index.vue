<template>
  <div class="base-container full-box">
    <div class="header-box" ref="headerBox">
      <slot name="header"></slot>
    </div>
    <div class="content-container" ref="contentBox">
      <div class="border-left"></div>
      <div class="border-right"></div>
      <img class="border-background" src="@/assets/image/background/border-background.png" alt />
      <el-scrollbar style="height:100%">
        <div class="content-box full-box">
          <slot></slot>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import {debounce} from "@/utils/tools"
export default {
  name: "component-name",
  props: {},
  methods: {
    setHeight() {
        this.$refs.contentBox.style.height = this.$el.offsetHeight - this.$refs.headerBox.offsetHeight - 10 + 'px';
    }
  },
  created() {},
  mounted() {
    this.setHeight();
    window.onresize = debounce(this.setHeight, 400);
  }
};
</script>

<style lang='scss' scoped>
.base-container {
  .header-box {
    margin-bottom: $size10;
  }
  .content-container {
    width: 100%;
    position: relative;
    .content-box {
      box-sizing: border-box;
      padding: $size20;
      width: 100%;
    }

    .border-background {
      position: absolute;
      left: 0;
      top: -5px;
      width: 23px;
      height: 7px;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        270deg,
        rgba(0, 249, 255, 0) 0%,
        rgba(0, 249, 255, 0.3) 51%,
        rgba(0, 249, 255, 0.2) 100%
      );
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        270deg,
        rgba(0, 249, 255, 0) 0%,
        rgba(0, 249, 255, 0.3) 51%,
        rgba(0, 249, 255, 0) 100%
      );
    }
    .border-left {
      left: 0;
    }
    .border-right {
      right: 0;
    }
    .border-left,
    .border-right {
      position: absolute;
      width: 2px;
      top: 0;
      bottom: 0;
      background: linear-gradient(
        270deg,
        rgba(0, 249, 255, 0) 0%,
        rgba(0, 249, 255, 0.2) 51%,
        rgba(0, 249, 255, 0) 100%
      );
    }
  }
}
</style>