function solution(myString, pat) {
    let answer = 0;
    for (let i = 0; i < myString.length; i++) {
        const word = myString.slice(i, i + pat.length);
        if (word == pat) {
            answer += 1;
        }
    }
    return answer;
}