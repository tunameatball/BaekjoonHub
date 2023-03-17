function solution(n) {
    return `${n}`.split('').reduce((acc, value) => acc += Number(value), 0);
}