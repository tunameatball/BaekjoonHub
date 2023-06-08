function solution(arr, n) {
    return arr.map((value, index) => {
        if (arr.length % 2 == 0) {
            if (index % 2 != 0) {
                return value + n;
            }
        } else {
            if (index % 2 == 0) {
                return value + n;
            }
        }
        return value;
    })
}