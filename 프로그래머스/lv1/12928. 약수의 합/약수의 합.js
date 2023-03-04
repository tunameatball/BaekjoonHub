function solution(n) {
    var answer = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (i == Math.sqrt(n)) {
            answer += i;
        } else if (n % i == 0) {
            answer += i + n/i;
        }
    }
    return answer;
}