function solution(common) {
    var answer = 0;
    if (common[2] - common[1] == common[1] - common[0]) {
        answer = common.at(-1) + common[1] - common[0];
    } else {
        answer = common.at(-1) * common[1] / common[0];
    }
    return answer;
}