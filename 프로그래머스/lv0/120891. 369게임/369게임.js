function solution(order) {
    const reg = /[^3|6|9]/g
    return `${order}`.replace(reg, '').length;
}