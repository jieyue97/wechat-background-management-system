<template>
  <div></div>
</template>

<script>
export default {
  name: "Init",
  created() {
    if (this.$store.getters.routes.length) {
      this.$router.push(this.$store.getters.routes[0].path);
    }
  },
};
</script>

<style>
</style>