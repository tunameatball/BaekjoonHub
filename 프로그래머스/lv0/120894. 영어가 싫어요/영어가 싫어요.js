function solution(numbers) {
    const number = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    Object.keys(number).forEach(key => numbers = numbers.replaceAll(key, number[key]));
    return Number(numbers);
}