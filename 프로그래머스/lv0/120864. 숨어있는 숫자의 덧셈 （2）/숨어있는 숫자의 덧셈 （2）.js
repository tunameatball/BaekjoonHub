function solution(my_string) {
    const reg = /\d+/g;
    return my_string.match(reg)?.reduce((acc, value) => acc += Number(value), 0) ?? 0;
}