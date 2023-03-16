function solution(t, p) {
    var answer = 0;
    const indexs = [];
    t.split('').forEach((value, index) => {
        if (p[0] >= value) {
            indexs.push(index);
        }
    });
    indexs.forEach(i => {
        const number = t.slice(i, i + p.length);
        if (number.length === p.length && Number(number) <= Number(p)) {
            answer += 1;
        }
    })
    return answer;
}