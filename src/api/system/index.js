import axios from "@/request"

export const getUserInfo = (userInfo) => axios({
    params: userInfo,
    method: "get",
    url: "/data/user.json"
})