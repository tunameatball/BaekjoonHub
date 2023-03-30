function solution(left, right) {
    let answer = 0;
    for (let n = left; n <= right; n++) {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {    
            if (n % i == 0) {
                count += n / i == i ? 1 : 2;
            }
        }
        answer += count % 2 == 0 ? n : n * -1;
    }
    return answer;
}