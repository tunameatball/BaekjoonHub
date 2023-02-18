
function solution(ingredient) {
  let count = 0;
  const reg = /1231/;

  let numberStr = ingredient.join('');
  
  let index = numberStr.search(reg);

  while (index >= 0) {
    count += 1;

    let prevStr = numberStr.substr(0, index);
    const nextStr = numberStr.substr(index + 4);

    numberStr = prevStr + nextStr;
    const startIndex = index - 3 < 0 ? 0 : index - 3;
    index = numberStr.indexOf('1231', startIndex);
  }

  return count;
}