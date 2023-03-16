function solution(k, score) {
    const answer = [];
    const scores = [];
    score.forEach(value => {
        scores.push(value);
        scores.sort((a, b) => b - a);
        let index = scores.length <= k ? scores.length - 1 : k - 1;
        answer.push(scores[index]);
    });
    return answer;
}