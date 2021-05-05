<template>
  <div class="base-tree full-box">
    <el-input v-if="search" size="medium" class="filter-input" placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
    <el-tree ref="tree" v-bind="$attrs" v-on="$listeners" :filter-node-method="filterNode"></el-tree>
  </div>
</template>

<script>
export default {
  props: {
    searchSize:{
      type: String,
      default: "medium"
    },
    search: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      filterText: ""
    };
  },
  methods:{
     filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
  }
};
</script>

<style lang="scss" scoped>
.base-tree{
  .filter-input{
    margin-bottom: $size10;
  }
}
</style>