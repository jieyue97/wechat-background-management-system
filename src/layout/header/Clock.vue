<template>
  <div class="clock-container text-linear-gradient">{{ nowTime }}</div>
</template>

<script>
import { getDate } from "@/utils/date";
export default {
  data() {
    return {
      nowTime: getDate(),
      timeId: null,
    };
  },
  created() {
    this.timeId = setInterval(() => {
      this.changeTime();
    }, 1000);
  },
  methods: {
    changeTime() {
      this.nowTime = getDate();
    },
  },
  beforeDestroy() {
    clearInterval(this.timeId);
  },
};
</script>

<style lang="scss" scoped>
.clock-container {
  width: 280px;
  text-align: left;
  font-family: Number;
  font-size: $systemTitleFontSize;
  font-weight: 800;
}
</style>>
