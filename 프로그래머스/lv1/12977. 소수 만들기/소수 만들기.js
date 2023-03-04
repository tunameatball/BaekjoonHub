function solution(nums) {
  var answer = 0;
  
  const isPrime = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  for (let index1 = 0; index1 < nums.length - 2; index1++) {
    for (let index2 = index1 + 1; index2 < nums.length -1; index2++) {
      for (let index3 = index2 + 1; index3 < nums.length; index3++) {
        if (isPrime(nums[index1] + nums[index2] + nums[index3])) {
          answer += 1;
        }
      }
    }
  }
  
  return answer;
}