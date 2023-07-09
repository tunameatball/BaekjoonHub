function solution(arr, flag) {
    let answer = '';
    arr.forEach((value, index) => {
        if (flag[index]) {
            answer += value.toString().repeat(value * 2);
        } else {
            answer = answer.slice(0, answer.length - value);
        }
    })
    return answer.split('').map(Number);
}