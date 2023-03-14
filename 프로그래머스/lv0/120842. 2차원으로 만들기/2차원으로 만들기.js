function solution(num_list, n) {
    var answer = [];
    num_list.forEach((value, index) => {
        if (index % n == 0) {
            answer.push([]);
        }
        answer.at(-1).push(value);
    });
    return answer;
}