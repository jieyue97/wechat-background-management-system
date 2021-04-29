<template>
  <div class="base-container full-box">
    <slot name="header"></slot>
    <div class="content-box">
      <div class="border-left"></div>
      <div class="border-right"></div>
      <img
        class="border-background"
        src="@/assets/image/background/border-background.png"
        alt=""
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-name",
  props: {},
  computed: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang='scss' scoped>
.base-container {
  .content-box {
    box-sizing: border-box;
    padding: 20px;
    position: relative;
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
    .border-left{
        left: 0;
    }
    .border-right{
        right: 0;
    }
    .border-left,.border-right{
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