function solution(k, tangerine) {
    const counts = tangerine.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, {});
    
    const amounts = Object.values(counts).sort((a, b) => b - a);
    
    let answer = 0;
    
    while(k > 0) {
        k -= amounts.shift();
        answer += 1;
    }
    
    return answer;
}