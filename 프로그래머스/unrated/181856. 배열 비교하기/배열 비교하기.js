function solution(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return arr1.length > arr2.length ? 1 : -1
    } else {
        const arr1Sum = arr1.reduce((acc, value) => acc += value, 0);
        const arr2Sum = arr2.reduce((acc, value) => acc += value, 0);
        
        return arr1Sum > arr2Sum ? 1 : arr1Sum == arr2Sum ? 0 : -1;
    }
}