import VueRouter from "vue-router"
import pages from "./pages"
import views from "./views"
import Vue from "vue"
import store from "@/store"

const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    ...pages,
    ...views
]

const router = new VueRouter({
    routes
})

// 动态路由
const routeFormat = (menuList, isChild = false) => {
    let routeList = menuList.map(menu => {
        let hasChild = menu.children && menu.children.length;
        let path = menu.value;
        let icon = menu.icon;
        let name = menu.title;
        let route = {
            path: path,
            component(resolve) {
                if (hasChild && isChild) {
                    require([`../layout/page`], resolve)
                } else if (hasChild) {
                    require([`../layout`], resolve)
                } else {
                    require([`../views/main${path}`], resolve)
                }
            },
            name: name,
            icon: icon
        }
        if (!hasChild && !isChild) {
            let childPath = route.path + '/index'

            route.children = [{
                ...route,
                path: childPath,
                isUserCreate: true
            }]
            route.redirect = childPath;
            route.component = (resolve) => {
                require([`../layout`], resolve)
            }
        } else if (hasChild) {
            route.children = routeFormat(menu.children, true);
            route.redirect = menu.children[0].value;
        }
        return route;
    })
    if (!isChild) {
        router.addRoutes(routeList);
        store.commit('SET_ROUTES', routeList)
    } else {
        return routeList;
    }
}
router.routeFormat = routeFormat;


let menuList = store.getters.menuList
if (store.getters.token && menuList.length) {
    router.routeFormat(menuList);
}

export default router;