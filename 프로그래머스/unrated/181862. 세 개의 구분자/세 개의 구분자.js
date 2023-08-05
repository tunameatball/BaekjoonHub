function solution(myStr) {
    const result = myStr.split(/a|b|c/).filter(value => value.length > 0);
    return result.length == 0 ? ["EMPTY"] : result;
}