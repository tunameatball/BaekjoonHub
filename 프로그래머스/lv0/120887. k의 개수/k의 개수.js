function solution(i, j, k) {
    let answer = 0;
    const kStr = k.toString();
    for (let n = i; n <= j; n++) {
        n.toString().split('').forEach(value => {
            if (value == kStr) {
                answer += 1;
            }
        })
    }
    return answer;
}