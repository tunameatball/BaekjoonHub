function solution(x) {
    const sum = `${x}`.split('').reduce((acc, value) => acc += Number(value), 0);
    return x % sum === 0
}