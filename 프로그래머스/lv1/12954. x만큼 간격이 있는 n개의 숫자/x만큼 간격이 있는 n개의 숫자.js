function solution(x, n) {
    return new Array(n).fill().map((value, index) => {
        return x + (index * x)
    });
}