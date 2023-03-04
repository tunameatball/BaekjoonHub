function solution(n) {
  const results = {
      0: 0,
      1: 1
  };
  let i = 0;
  while (i <= n-2) {
    results[i + 2] = (results[i + 1] + results[i]) % 1234567; 
    i++;
  }
  
  return results[n];
}