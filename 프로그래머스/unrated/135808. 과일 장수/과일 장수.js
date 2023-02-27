function solution(k, m, score) {
  const apples = {};
  score.forEach(value => {
    apples[value] = (apples[value] ?? 0) + 1;
  });

  const scores = Object.keys(apples).sort();
  return scores.reduceRight((acc ,score, index) => {
    acc += parseInt(apples[score] / m) * score;
    if (index != 0) {
      apples[scores.at(index-1)] += apples[score] % m;
    }
    return acc;
  }, 0) * m;
}