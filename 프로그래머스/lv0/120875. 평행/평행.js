const gradient = (a, b) => {
    const x = Math.abs(a[0] - b[0]);
    const y = Math.abs(a[1] - b[1]);
    return x/y
}
function solution(dots) {
    let answer = 0;
    if (gradient(dots[0], dots[1]) === gradient(dots[2], dots[3])) {
        answer = 1;
    } else if (gradient(dots[0], dots[2]) === gradient(dots[1], dots[3])) {
        answer = 1;
    } else if (gradient(dots[0], dots[3]) === gradient(dots[1], dots[2])) {
        answer = 1;
    }
    return answer;
}