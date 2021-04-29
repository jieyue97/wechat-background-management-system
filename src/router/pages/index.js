// 转换页面
import Init from "@/views/main/init";
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
        path: '/404',
        component: () => import("@/views/error/404")
    },
    {
        path: '*',
        redirect: '/404'
    }
];
export default pageRoutes;