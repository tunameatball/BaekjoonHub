function solution(n) {
    
    const numbers = new Array(n + 1).fill(true).fill(false, 0, 2);
    
    for (let i = 2; i < Math.sqrt(n); i++) {
        for (let j = i * 2; j <= n; j += i) {
            if (numbers[j] == true) {
                numbers[j] = false
            }
        }
    }
    
    return numbers.filter(value => value == true).length;
}