export const getStore = (storeKey, isSessionStorage) => {
    let resData = isSessionStorage ? sessionStorage.getItem(storeKey) : localStorage.getItem(storeKey)
    return resData ? JSON.parse(resData) : null
}
export const setStore = (storeKey, data, isSessionStorage) => {
    data = JSON.stringify(data)
    isSessionStorage ? sessionStorage.setItem(storeKey, data) : localStorage.setItem(storeKey, data)
}