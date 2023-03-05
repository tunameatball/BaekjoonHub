function solution(s) {
    const charIndexs = {};
              
    return s.split('').reduce((acc, value, index) => {
        if (charIndexs[value] == undefined) {
            charIndexs[value] = index;
            acc.push(-1);
        } else {
            acc.push(index - charIndexs[value]);
            charIndexs[value] = index;
        }
        
        return acc;
    }, []);
}