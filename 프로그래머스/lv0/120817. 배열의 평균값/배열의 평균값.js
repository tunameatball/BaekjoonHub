function solution(numbers) {
    return numbers.reduce((acc, value) => {
        return acc += value;
    }, 0) / numbers.length;
}