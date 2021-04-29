import { getStore } from "@/utils/store"
import { getMenu } from "@/api/user";
import { setStore } from "../../utils/store";
const SYSTEM = {
    state: {
        menuList: getStore('menuList', true) || [],
        isCollapse: false,
        routes: []// 保存动态路由
    },
    mutations: {
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse;
        },
        SET_ROUTES(state, routes) {
            state.routes = routes
        },
        SET_MENU(state, menu) {
            state.menuList = menu;
            setStore('menuList', menu, true)
        }
    },
    actions: {
        GET_MENU({ commit }) {
            return getMenu().then((res) => {
                commit('SET_MENU', res.data.data)
                console.log(res, '菜单')
            })
        },
    }
}
export default SYSTEM;