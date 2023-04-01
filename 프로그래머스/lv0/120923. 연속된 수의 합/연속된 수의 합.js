function solution(num, total) {
    var answer = [];
    const center = Math.floor(total / num);
    answer.push(center);
    let count;
    if (num % 2 === 0) {
        count = Math.floor(num / 2) - 1;
        answer.push(center + count + 1);
    } else {
        count = Math.floor(num / 2);
    }
    
    for (let i = 1; i <= count; i++) {
        answer.push(center - i);
        answer.push(center + i);
    }
    
    return answer.sort((a, b) => a - b);
}