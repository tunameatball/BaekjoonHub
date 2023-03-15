function solution(s) {
    const numbers = s.split(' ');
    return numbers.filter((value, index) => {
        return value != 'Z' && numbers[index + 1] != 'Z'
    }).reduce((acc, value) => acc += Number(value), 0);
}