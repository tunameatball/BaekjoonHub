function solution(n) {
    let answer = 0;
    let num = n % 2 == 0 ? 2 : 1;
    for (num; num <= n; num += 2) {
        if (n % 2 == 0) {
            answer += Math.pow(num, 2);
        } else {
            answer += num;    
        }
    }
    
    return answer;
}