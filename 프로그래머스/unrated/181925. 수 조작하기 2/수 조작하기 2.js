function solution(numLog) {
    const control = {
        '1' : 'w',
        '-1' : 's',
        '10' : 'd',
        '-10' : 'a'
    };
    
    return numLog.reduce((answer, num, index) => {
        if (index == numLog.length - 1) {
            return answer;
        }
        
        const nextNum = numLog[index + 1];
        answer += control[(nextNum - num)];
        return answer;
    }, '');
    
}