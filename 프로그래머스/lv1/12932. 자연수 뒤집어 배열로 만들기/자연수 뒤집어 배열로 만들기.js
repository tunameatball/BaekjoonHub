function solution(n) {
    return `${n}`.split('').map(num => parseInt(num)).reverse();
}