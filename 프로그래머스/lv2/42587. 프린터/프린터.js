function solution(priorities, location) {
  let answer = 0;
  let newIndex = priorities.slice(0, location).filter(value =>  value >= priorities.at(location)).length;
  const newPriorities = priorities.filter((value) => value >= priorities.at(location));
  
  while(true) {
    const number = newPriorities.shift();
    
    newIndex -= 1;
    if (number >= Math.max(...newPriorities)) {
      answer++;
      if (newIndex < 0) {
        break;
      }
    } else {
      newPriorities.push(number);
      if (newIndex < 0) {
        newIndex = newPriorities.length - 1;
      }
    }
  }
  
  return answer;
}