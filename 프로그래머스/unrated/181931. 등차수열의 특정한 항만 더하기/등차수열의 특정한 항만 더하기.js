function solution(a, d, included) {
    return included.reduce((acc, value, index) => {
        if (value) {
            acc += a + d * index;
        }
        return acc;
    }, 0);
}