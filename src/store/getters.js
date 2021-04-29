const getters = {
    // 系统信息
    menuList: state => state.system.menuList,
    isCollapse: state => state.system.isCollapse,
    routes: state => state.system.routes,
    // 用户信息
    token: state => state.user.token,
    userInfo: state => state.user.userInfo
}
export default getters;