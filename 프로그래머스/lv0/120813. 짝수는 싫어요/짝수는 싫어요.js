function solution(n) {
    var answer = [];
    for (let num = 1; num <= n; num += 2) {
        answer.push(num);
    }
    return answer;
}