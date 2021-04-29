
import axios from "axios";
import store from "@/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth";

//默认超时时间
axios.defaults.timeout = 10000;
//返回其他状态码
// axios.defaults.validateStatus = function (status) {
//     return status >= 200 && status <= 500;
// };
// NProgress 配置
NProgress.configure({
    showSpinner: false
});


//http request拦截
axios.interceptors.request.use(
    config => {
        //开启 progress bar
        NProgress.start();
        //让每个请求携带token
        if (getToken()) {
            config.headers["Authorization"] = "bearer " + getToken();
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
//http response 拦截
axios.interceptors.response.use(
    res => {
        //关闭 progress bar
        NProgress.done();
        return res;
    },
    error => {
        NProgress.done();
        return Promise.reject(new Error(error));
    }
);

export default axios;
