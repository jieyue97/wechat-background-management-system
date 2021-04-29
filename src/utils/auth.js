import { getStore } from "./store"

export const getToken = () => {
    return getStore('token')
}