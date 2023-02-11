function solution(arr) {
    const answer = [];
    answer.push(arr.shift());
    arr.forEach(value => {
        if (answer[answer.length - 1] != value) {
            answer.push(value);
        }
    })
    
    return answer;
}