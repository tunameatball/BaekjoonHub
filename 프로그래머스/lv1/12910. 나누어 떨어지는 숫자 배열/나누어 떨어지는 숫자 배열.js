function solution(arr, divisor) {
    const answer = arr.sort((a, b) => a - b).reduce((acc, value) => {
        if (value % divisor == 0) {
            acc.push(value);
        }
        return acc;
    }, []);
    return answer.length > 0 ? answer : [-1];
}