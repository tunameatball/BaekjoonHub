function solution(n) {
    let answer = 0;
    let fact = 1;
    for (answer = 1; fact <= n; answer++) {
        fact *= answer;
    }
    return answer - 2;
}