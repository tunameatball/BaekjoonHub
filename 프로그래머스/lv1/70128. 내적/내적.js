function solution(a, b) {
    return a.reduce((acc, value, index) => {
        acc += value * b[index];
        return acc;
    }, 0);
}