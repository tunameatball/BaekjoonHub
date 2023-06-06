function solution(num_list) {
    let sumOdd = 0;
    let sumEven = 0;
    num_list.forEach((num, index) => {
        if ((index + 1) % 2 == 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    });
    
    return Math.max(sumOdd, sumEven);
}