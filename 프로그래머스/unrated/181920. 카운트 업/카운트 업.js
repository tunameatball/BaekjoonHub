function solution(start, end) {
    return new Array(end - start + 1).fill().map((_, index) => start + index);
}