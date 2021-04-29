
import Vue from "vue"
import Element from 'element-ui';
import router from "@/router"
import store from "@/store"
import App from './App.vue'
import "./permission"
import "./assets/style/element.scss";
// 注册全局组件
import '@/utils/global'
// 导航菜单收起
import Fragment from 'vue-fragment'
import config from "@/config"

Vue.prototype.system = config;

Vue.use(Fragment.Plugin)

Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

