<template>
  <div class="login-page full-box content-center">
    <div class="login-form-container">
      <div class="text-linear-gradient system-name">{{ system.title }}</div>
      <el-form
        :model="loginForm"
        status-icon
        :rules="formRules"
        ref="loginForm"
        label-width="40px"
        class="demo-loginForm"
      >
        <el-form-item label="用户" prop="username">
          <el-input
            placeholder="用户名/手机号/邮箱"
            v-model="loginForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 120px" type="primary" @click="submitForm"
            >登录</el-button
          >
          <el-button style="width: 120px" @click="submitForm">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
export default {
  name: "LoginPage",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      formRules: {},
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(async (res) => {
        if (res) {
          await this.$store.dispatch("LOGIN", {
            ...this.loginForm,
            password: md5(this.loginForm.password),
          });
          await this.$store.dispatch("GET_MENU").then((res) => {
            this.$router.routeFormat(this.$store.getters.menuList);
            this.$store.getters.routes.length &&
              this.$router.push(this.$store.getters.routes[0].path);
          });
        }
      });
    },
  },
  created() {},
};
</script>

<style lang='scss' scoped>
.login-page {
  .login-form-container {
    height: 300px;
    width: 500px;
    text-align: center;
    .system-name {
      margin-bottom: 50px;
      font-size: 32px;
    }
  }
}
</style>