function solution(babbling) {
    const reg = /aya|ye|woo|ma/g
    return babbling.filter(value => value.replace(reg, '').length == 0).length;
}