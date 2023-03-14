function solution(numbers, k) {
    const index = 0 + (k - 1) * 2;
    return numbers[index % numbers.length];
}