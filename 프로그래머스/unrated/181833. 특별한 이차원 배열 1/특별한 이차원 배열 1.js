function solution(n) {
    const answer = [];
    for (let i = 0; i < n; i++) {
        const temp = new Array(n).fill(0);
        temp[i] = 1;
        answer.push(temp);
    }
    return answer;
}