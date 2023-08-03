function solution(arr, queries) {
    queries.forEach(value => {
        for (let i = value[0]; i <= value[1]; i += 1) {
            arr[i] += 1;
        }
    })
    return arr;
}