import router from '@/router'
// import store from '@/store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import config from '@/config';
import { getToken } from '@/utils/auth';
NProgress.configure({ showSpinner: false });
router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === '/login') { //如果登录成功访问登录页跳转到主页
            next({ path: '/' })
        } else {
            next();
        }
    } else {

        //判断是否需要认证，没有登录访问去登录页
        if (config.isAuth) {
            if (to.path === '/login') { //如果登录成功访问登录页跳转到主页
                next()
            } else {
                next({ path: '/login' });
            }

        } else {

            next();
        }
    }
})

