function solution(n) {
    var answer = n == 1 ? 1 : n % 2 == 0 ? 1 : 2;
    for (let i = 3; Math.ceil(n/i) - Math.floor(i/2) > 0; i++) {
        const centerNumber = Math.floor(n/i);
        const remain = n % i;
        if (i % 2 != 0) {
            if (remain == 0) {
                answer += 1;
            }
        } else {
            if (remain == i / 2) {
                answer += 1;
            }
        }
    }
    return answer;
}