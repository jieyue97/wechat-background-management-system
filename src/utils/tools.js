/**
 * 防抖
 * @param {Function} fn 
 * @param {Number} delay 
 */
export function debounce(fn, delay = 500) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      //模拟触发change事件
      fn.apply(this, arguments)
      // 清空计时器
      timer = null
    }, delay);
  }
}
/**
 * 节流
 * @param {Function} fn 
 * @param {Number} delay 
 */
export function throttle(fn, delay = 100) {
  let timer = null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay);
  }
}
