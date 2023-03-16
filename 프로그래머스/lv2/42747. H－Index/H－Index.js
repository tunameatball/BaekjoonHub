function solution(citations) {
  for (let i = citations.length; i >= 0; i--) {
    let over = 0;
    let same = 0;
    citations.forEach(value => {
      if (value > i) {
        over += 1;
      } else if (value == i) {
        same += 1;
      }
    });
    if (over + same >= i) {
      return i;
    }
  }
  return 0;
}