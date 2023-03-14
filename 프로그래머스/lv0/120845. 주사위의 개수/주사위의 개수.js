function solution(box, n) {
    return box.reduce((acc, value) => {
        return acc *= Math.floor(value / n)
    }, 1);
}