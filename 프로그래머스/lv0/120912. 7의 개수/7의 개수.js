function solution(array) {
    return array.reduce((acc, value) => {
        acc += value.toString().split('').filter(num => num === '7').length;
        return acc;
    }, 0);
}