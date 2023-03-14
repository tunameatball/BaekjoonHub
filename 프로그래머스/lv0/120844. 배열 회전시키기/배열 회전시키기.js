function solution(numbers, direction) {
    var answer = [];
    if (direction === 'right') {
        const number = numbers.pop();
        return [number, ...numbers];
    } else {
        const number = numbers.shift();
        return [...numbers, number];
    }
}