function solution(arr) {
    let answer = Math.max(...arr);
    while (true) {
        if (arr.every(value => answer % value === 0)) {
            break;
        }
        answer++;
    }
    return answer;
}