function solution(balls, share) {
    let answer = 1;
    for (let i = 0; i < share; i++) {
        answer *= balls - i;
        answer /= (i + 1);
    }
    
    return answer;
}