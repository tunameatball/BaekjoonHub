function solution(n) {
    var answer = [];
    for (let number = 1; number <= Math.sqrt(n); number++) {
        if (n % number == 0) {
            answer.push(number);
            if (n / number != number) {
                answer.push(n / number);
            }
        }
    }
    return answer.sort((a, b) => a - b);
}