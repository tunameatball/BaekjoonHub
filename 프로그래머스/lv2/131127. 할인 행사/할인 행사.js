function solution(want, number, discount) {
    let count = 10;
    const wants = {};
    want.forEach((value, index) => {
        wants[value] = number[index];
    });
    
    const discounts = {};
    
    discount.slice(0, count).forEach(value => {
        discounts[value] = (discounts[value] || 0) + 1;
    });
    
    let answer = 0;
    let backIndex = count;
    
    while(true) {
        let isEqual = true;
        for (let value of want) {
            if (wants[value] != discounts[value]) {
                isEqual = false;
                break;
            }
        }
        
        if (isEqual) {
            answer += 1;
        }
      
        if (backIndex >= discount.length) {
          break;
        }
      
        let first = discount[backIndex - count];
        discounts[first] -= 1;
        let last = discount[backIndex];
        discounts[last] = (discounts[last] || 0) + 1;  
        backIndex += 1;
    }
    return answer;
}