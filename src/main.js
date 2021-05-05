
import Vue from "vue"
import router from "@/router"
import store from "@/store"
import App from './App.vue'
import "./permission"
import "./assets/style/element.scss";
// 导航菜单收起
import Fragment from 'vue-fragment'
import config from "@/config";
// 修改element 组件默认值
import "@/config/element";


// 注册全局组件
import '@/utils/global';

Vue.prototype.system = config;

Vue.use(Fragment.Plugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

