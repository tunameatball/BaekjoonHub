function solution(score) {
    const sortedScore = score.map(value => value[0] + value[1]).sort((a, b) => b - a);
    return score.map(value => {
        return sortedScore.indexOf(value[0] + value[1]) + 1;
    });
}