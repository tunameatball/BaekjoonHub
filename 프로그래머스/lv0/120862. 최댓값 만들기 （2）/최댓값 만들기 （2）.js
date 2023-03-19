function solution(numbers) {
    if (numbers.length == 2) {
        return numbers[0] * numbers[1];
    }
    const plus = numbers.filter(value => value > 0).sort((a, b) => b - a);
    const minus = numbers.filter(value => value < 0).sort((a, b) => a - b);
    let minusMax = 0;
    let plusMax = 0;
    if (minus.length >= 2) {
        minusMax = minus[0] * minus[1];
    }
    
    if (plus.length >= 2) {
        plusMax = plus[0] * plus[1];
    }

    return Math.max(plusMax, minusMax);
}