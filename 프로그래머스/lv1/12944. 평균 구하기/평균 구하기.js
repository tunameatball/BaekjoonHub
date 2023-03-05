function solution(arr) {
    return arr.reduce((acc, num) => {
        return acc + num;
    }, 0) / arr.length;
}