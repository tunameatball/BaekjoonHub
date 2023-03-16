function solution(n) {
    var answer = n + 1;
    const count = n.toString(2).split('').filter(value => value == '1').length;
    while(true) {
        const answerCount = answer.toString(2).split('').filter(value => value == '1').length;
        
        if (count == answerCount) {
            break;
        } else {
            answer += 1;
        }
    }
    return answer;
}