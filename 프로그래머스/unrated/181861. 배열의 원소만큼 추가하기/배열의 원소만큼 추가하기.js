function solution(arr) {
    let answer = [];
    arr.forEach(value => {
        for (let i = 0; i < value; i++) {
            answer.push(value);
        }
    });
    return answer;
}