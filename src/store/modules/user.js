import { getStore, setStore } from "../../utils/store";
import { getUserInfo } from "@/api/system";
const USER = {
    state: {
        token: getStore('token') || '',
        userInfo: getStore('userInfo') || { userName: '' }
    },
    mutations: {
        // 保存token
        SET_TOKEN(state, token) {
            state.token = token;
            setStore('token', token);
        },
        // 保存用户信息
        SET_USERINFO(state, data) {
            state.userInfo = data;
            setStore('userInfo', data);
        },
        CLEAR_TOKEN(state) {
            state.token = "";
            setStore('token', "")
        }
    },
    actions: {
        // 登录
        LOGIN({ commit, dispatch }, userInfo) {
            return new Promise((resolve, reject) => {
                getUserInfo(userInfo).then(res => {
                    commit('SET_TOKEN', res.data.data.token)
                    commit('SET_USERINFO', res.data.data)
                    resolve(res)
                })
            })
        },
        // 登出
        LOGOUT({ commit, dispatch }) {
            return new Promise((resolve, reject) => {
                commit("CLEAR_TOKEN")
                resolve({ code: 200 })
            })
        }
    }
}
export default USER;