function solution(survey, choices) {
  var answer = '';
    
  const resultIndex = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];

  const result = resultIndex.reduce((acc, value) => {
    acc[value[0]] = 0;
    acc[value[1]] = 0;
    return acc;
  }, {});
    
  survey.forEach((value, index) => {
      const select = choices[index];
      const score = Math.abs(select - 4);
      if (select < 4) {
          result[value[0]] += score;
      } else if (select > 4) {
          result[value[1]] += score;
      }
  });
  
  return resultIndex.map(value => {
      return result[value[0]] < result[value[1]] ? value[1] : value[0]
  }).join('');
}