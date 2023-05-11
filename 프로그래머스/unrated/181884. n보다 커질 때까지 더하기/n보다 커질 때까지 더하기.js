function solution(numbers, n) {
    var answer = 0;
    while (answer <= n && numbers.length > 0) {
        answer += numbers.shift();
    }
    return answer;
}