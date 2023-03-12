function solution(n, words) {
    let answer = [0, 0];
    const record = {};
    words.reduce((before, value, index, arr) => {
        if (record[value] != undefined) {
            answer = [(index % n) + 1, Math.floor(index / n) + 1]
            arr.splice(1)
        } else if (index != 0 && before != value[0]) {
            answer = [(index % n) + 1, Math.floor(index / n) + 1]
            arr.splice(1)
        } else {
            record[value] = 1;
        }
        return value.slice(-1);
    }, '');

    return answer;
}