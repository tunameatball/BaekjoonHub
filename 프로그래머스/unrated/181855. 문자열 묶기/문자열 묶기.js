function solution(strArr) {
    const count = new Array(30).fill(0);
    strArr.forEach(value => {
        count[value.length - 1] += 1;
    })
    
    return Math.max(...count);
}