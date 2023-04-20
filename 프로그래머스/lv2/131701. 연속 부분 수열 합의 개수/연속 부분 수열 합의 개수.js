function solution(elements) {
  const results = new Set();
  const newElements = elements.concat(elements);
  for (let count = 1; count <= elements.length; count++) {
    startIndex = 0;
    endIndex = count - 1;
    let sum = elements.slice(0, count).reduce((acc, value) => {
      acc += value
      return acc;
    }, 0);
    results.add(sum);
    while (endIndex < newElements.length - 1) {
      endIndex += 1;
      
      sum -= newElements[startIndex];
      sum += newElements[endIndex];
      results.add(sum);
      startIndex += 1;
    }
  }
  
  return results.size;
}