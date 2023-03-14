function solution(n) {
    let answer = 1;
    let fact = 1;
    while (fact * (answer + 1) <= n) {
        ++answer;
        fact *= answer;
    }
    return answer;
}