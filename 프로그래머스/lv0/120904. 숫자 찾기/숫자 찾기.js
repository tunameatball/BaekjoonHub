function solution(num, k) {
    let answer = -1;
    const numArr = `${num}`.split('');
    
    for (let i = 0; i < numArr.length; i++) {
        if (Number(numArr[i]) === k) {
            answer = i + 1;
            break;
        }
    }
    return answer;
}