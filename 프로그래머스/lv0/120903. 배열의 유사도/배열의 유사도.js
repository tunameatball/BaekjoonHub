function solution(s1, s2) {
    const temp = {};
    s1.forEach(value => temp[value] = 1);
    return s2.filter(value => temp[value] != undefined).length;
}