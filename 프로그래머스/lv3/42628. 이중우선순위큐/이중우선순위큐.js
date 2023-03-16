function solution(operations) {
  const numbers = {};

  operations.forEach(value => {
      const [op, number] = value.split(' ');

      if (op === 'I') {
        if (numbers[number] === undefined) {
          numbers[number] = 1;
        } else {
          numbers[number] += 1;    
        }
      } else {
        const keys = Object.keys(numbers).map(value => Number(value));
        const minMax = number === '1' ? Math.max(...keys) : Math.min(...keys);
        
        if (numbers[minMax] > 1) {
          numbers[minMax] -= 1;
        } else {
          delete numbers[minMax];
        }
      }        
  });
  const result = Object.keys(numbers).filter(key => numbers[key] > 0);
  
  return result.length > 0 ? [Math.max(...result), Math.min(...result)] : [0, 0];
}