function solution(babbling) {
  
  const words = {
    'a': 'aya',
    'y': 'ye',
    'w': 'woo',
    'm': 'ma'
  };
    
  return babbling.reduce((acc, value) => {
    let before = '';
    
    let isPossible = false;
    while (value.length != 0) {
      const word = words[value[0]];
      if (word == before || word == undefined) {
        isPossible = false;
        break;
      }
      
      if (value.startsWith(word)) {
        value = value.slice(word.length);
        before = word;
        isPossible = true;
      } else {
        isPossible = false;
        break;
      }
    }
    
    if (isPossible) {
      acc += 1;
    }
    
    return acc;
  }, 0);
}