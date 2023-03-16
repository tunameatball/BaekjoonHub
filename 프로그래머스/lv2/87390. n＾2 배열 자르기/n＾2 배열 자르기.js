function solution(n, left, right) {
  return Array(right - left + 1).fill().map((_, index) => {
    let i = index + left;
    if ((i % n) <= Math.floor(i / n)) {
      return Math.floor(i / n) + 1;
    } else {
      return i % n + 1
    }
  });  
}