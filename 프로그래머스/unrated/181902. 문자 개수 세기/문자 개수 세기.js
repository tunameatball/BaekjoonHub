function solution(my_string) {
    var answer = new Array(52).fill(0);
    my_string.split('').forEach(value => {
        const code = value.charCodeAt();
        if (code >= 97 && code <= 122) {
            answer[code - 71] += 1;
        } else {
            answer[code - 65] += 1;
        }
    });
    return answer;
}