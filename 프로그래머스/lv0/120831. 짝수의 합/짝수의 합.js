function solution(n) {
    return Array(n).fill().reduce((acc, value, index) => {
        if ((index + 1) % 2 === 0) {
            acc += index + 1;
        }
        return acc;
    }, 0);
}