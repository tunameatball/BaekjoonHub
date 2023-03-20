function solution(a, b) {
    var answer = 0;
    let gcd = 1;
    for (let n = 1; n <= Math.min(a, b); n++) {
        if (n == 1) {
            continue;
        }
        if (a % n === 0 && b % n === 0) {
            gcd = n;
        }
    }
    
    if (b === 1) {
        return 1;
    } else {
        b /= gcd;
        answer = 1;
        while (b != 1) {
            if (b % 2 === 0) {
                b /= 2;
            } else if (b % 5 === 0) {
                b /= 5;
            } else {
                answer = 2;
                break;
            }
        }
        return answer;
    }
}