function solution(a, b) {
    let answer = 0;
    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);
    
    let cursor = 0;
    
    for (let num of b) {
        if (cursor >= a.length) {
            break;
        }
        
        if (a[cursor] < num) {
            answer += 1;
            cursor += 1;
        }
    }
    return answer;
}