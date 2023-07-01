function solution(a, b) {
    const num1 = Number(`${a}${b}`);
    const num2 = 2 * a * b;
    
    return Math.max(num1, num2);
}