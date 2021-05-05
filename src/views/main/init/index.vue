<template>
  <div></div>
</template>

<script>
export default {
  name: "Init",
  async created() {
    if (!this.$store.getters.routes.length) {
      await this.$store.dispatch("GET_MENU").then(res => {
        this.$router.routeFormat(this.$store.getters.menuList);
      });
    }
    this.$store.getters.routes.length &&
      this.$router.push(this.$store.getters.routes[0].path);
  }
};
</script>

<style>
</style>