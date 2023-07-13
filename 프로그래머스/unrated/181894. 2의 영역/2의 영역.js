function solution(arr) {
    let startIndex = arr.indexOf(2);
    let lastIndex = arr.lastIndexOf(2) + 1;
    return startIndex == -1 ? [-1] : arr.slice(startIndex, lastIndex);
}