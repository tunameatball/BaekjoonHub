function solution(n, k) {
    var answer = [];
    for (let num = k; num <= n; num += k) {
        answer.push(num);
    }
    return answer;
}