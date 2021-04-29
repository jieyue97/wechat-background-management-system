/**
 * findObject 发现结构对象
 * @param {Array} array 
 * @param {*} value 
 * @returns 
 */
 export const findObject = (array, value, resultFilter = []) => {
    array.forEach(item => {
        Object.keys(item).forEach(i => {
            if (item[i] === value) {
                resultFilter.push(item)
            } else if (Array.isArray(item[i]) && item[i].length) {
                findObject(item[i], value, resultFilter)
            }
        })
    })
    return resultFilter.length ? resultFilter[0] : {}
}