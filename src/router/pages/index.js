// 转换页面
import Init from "@/views/main/init";
import UserInfo from "@/views/user-info";
const pageRoutes = [
    {
        path: "/",
        component: () => import("@/layout"),
        redirect: "/init"
    },
    {
        path: "/init",
        component: Init
    },
    {
        path: "/login",
        component: () => import("@/views/login")
    },
    {
        path: "/user-info",
        component: UserInfo
    },
    {
        path: '/404',
        component: () => import("@/views/error/404")
    },
    {
        path: '*',
        redirect: '/404'
    }
];
export default pageRoutes;