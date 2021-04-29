
export const getDate = (date) => {
    const addInt = (num) => {
        return num < 10 ? '0' + num : num
    }
    date = date ? new Date(date) : new Date(); //实例一个时间对象；
    let year = date.getFullYear(); //获取系统的年；
    let month = date.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
    let day = date.getDate(); //   获取系统日;
    let hour = addInt(date.getHours()); //获取系统时间
    let minute = addInt(date.getMinutes()); //分
    let second = addInt(date.getSeconds()); //秒
    let resDate = year +
        "年" +
        month +
        "月" +
        day +
        "日 " +
        hour +
        ":" +
        minute +
        ":" +
        second;
    return resDate
}