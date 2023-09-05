function solution(arr, queries) {
    queries.forEach(value => {
        const [i, j] = value;
        const tempValue = arr[i];
        arr[i] = arr[j];
        arr[j] = tempValue;
    });
    return arr;
}