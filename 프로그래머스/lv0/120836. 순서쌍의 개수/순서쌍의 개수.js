function solution(n) {
    let answer = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            answer++;
        }
    }
    answer *= 2;
    if (Math.sqrt(n) == Math.floor(Math.sqrt(n))) {
        answer -= 1;
    }
    return answer;
}