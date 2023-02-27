function solution(keymap, targets) {
  var answer = [];
  const keyMap = {};
  
  for (let key of keymap) {
    [...key].forEach((keyChar, index) => {
      if (keyMap[keyChar] == undefined || keyMap[keyChar] > index + 1) {
        keyMap[keyChar] = index + 1;
      }
    });
  }

  for (let target of targets) {    
    let count = 0;
    for (let targetChar of [...target]) {
      if (keyMap[targetChar] == undefined) {
        count = -1;
        break;
      } else {
        count += keyMap[targetChar];
      }
    };
    
    answer.push(count);
  }
  
  return answer;
}