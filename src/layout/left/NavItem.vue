<template>
  <fragment>
    <template v-for="menu in menuList">
      <el-submenu
        background-color="#042345"
        :key="menu[menuProps.value]"
        :index="menu[menuProps.value]"
        v-if="menu.children.length"
        :class="{ 'is-active': vaildAvtive(menu) }"
      >
        <template slot="title"
          ><i :class="menu[menuProps.icon]"></i
          ><span slot="title">{{ menu[menuProps.title] }}</span></template
        >
        <NavItem :menuList="menu.children" :menuProps="menuProps"></NavItem>
      </el-submenu>
      <el-menu-item
        :class="{ 'is-active': vaildAvtive(menu) }"
        :key="menu.value"
        :index="menu[menuProps.value]"
        v-else
      >
        <i :class="menu[menuProps.icon]"></i>
        <span slot="title">{{ menu[menuProps.title] }}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    menuProps: {},
    menuList: {},
  },
  computed: {},
  data() {
    return {};
  },
  methods: {
    vaildAvtive(item) {
      return (
        this.$route.path === item.value + "/index" ||
        this.$route.path === item.value
      );
    },
  },
  created() {},
};
</script>

<style lang='scss' scoped>
</style>