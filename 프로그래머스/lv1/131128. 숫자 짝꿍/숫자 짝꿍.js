function solution(X, Y) {
  const commons = [];
  const xCounter = {};
  
  [...X].forEach(number => {
    if (xCounter[number] == undefined) {
      xCounter[number] = 1;
    } else {
      xCounter[number] += 1;
    }
  });
  
  [...Y].forEach(number => {
    if (xCounter[number] != undefined && xCounter[number] > 0) {
      xCounter[number] -= 1;
      commons.push(number);
    }
  });
  
  const setCommons = [...new Set(commons)];
  
  if (setCommons.length == 0) {
    return '-1';
  } else if (setCommons.length == 1 && setCommons[0] == '0') {
    return '0';    
  } else {
    return commons.sort((a, b) => b - a).join('');
  }
}