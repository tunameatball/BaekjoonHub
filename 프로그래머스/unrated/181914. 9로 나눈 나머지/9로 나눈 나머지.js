function solution(number) {
    return number.split('').map(Number).reduce((acc, value) => {
        acc += value;
        return acc;
    }, 0) % 9;
}