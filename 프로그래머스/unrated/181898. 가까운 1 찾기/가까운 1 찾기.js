function solution(arr, idx) {
    return arr.findIndex((value, index) => {
        if (index < idx) {
            return false;
        }
        
        return value == 1;
    })
}