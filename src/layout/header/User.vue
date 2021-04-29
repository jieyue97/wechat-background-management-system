<template>
  <div class="user-container">
    <img
      class="user-avatar"
      src="@/assets/image/background/home-background.png"
      alt=""
    />
    <el-dropdown trigger="click" @command="commandHandle">
      <span class="el-dropdown-link">
        {{ $store.getters.userInfo.userName
        }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="info" icon="el-icon-plus"
          >个人信息</el-dropdown-item
        >
        <el-dropdown-item command="logout" icon="el-icon-circle-check"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
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
  methods: {
    // 下拉菜单事件
    commandHandle(command) {
      switch (command) {
        case "info":
          this.jumpUserInfo();
          break;
        case "logout":
          this.userLogout();
          break;
        default:
          break;
      }
    },
    jumpUserInfo() {
      this.$router.push("/user-info");
    },
    userLogout() {
      this.$store.dispatch("LOGOUT").then((res) => {
        console.log(res, "退出成功！");
        this.$router.push("/login");
      });
    },
  },
  created() {},
};
</script>

<style lang='scss' scoped>
.user-container {
  display: flex;
  align-items: center;
  .user-avatar {
    margin-right: 10px;
    border: 1px solid $systemActiveBackgroundColor;
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }
  .el-dropdown-link {
    white-space: nowrap;
    color: $systemFontColor;
    cursor: pointer;
  }
}
</style>