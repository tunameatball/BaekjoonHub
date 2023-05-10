function solution(num_str) {
    return num_str.split('').reduce((acc, value) => {
        acc += Number(value);
        return acc;
    }, 0);
}