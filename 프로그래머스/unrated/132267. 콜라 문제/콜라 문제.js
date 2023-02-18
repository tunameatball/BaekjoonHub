function solution(a, b, n) {
    var answer = 0;
    
    while(n >= a) {
        const count = parseInt(n/a) * b;
        answer += count;
        const remain = n % a;
        n = count + remain;
    }
    return answer;
}