function solution(n) {
    return Array(n).fill().map((_, index) => index + 1).filter((value) => {
        for (let num = 2; num <= Math.sqrt(value); num++) {
            if (value % num == 0) {
                return true;
            }
        }
        return false;
    }).length;
}