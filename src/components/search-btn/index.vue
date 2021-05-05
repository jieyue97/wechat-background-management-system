<template>
  <div class="search-btn">
    <el-button type="primary" icon="el-icon-search" @click="$emit('search')">搜索</el-button>
    <el-button icon="el-icon-refresh" @click="$emit('reset')">重置</el-button>
  </div>
</template>

<script>
export default {
  name: "SearchBtn"
};
</script>

<style lang="scss" scoped>
.search-btn{
  display: flex;
  flex-wrap: nowrap;
}
</style>