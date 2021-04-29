import axios from "@/request"

export const getMenu = () => axios({
    method: "get",
    url: "/data/menu.json"
})