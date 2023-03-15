function solution(array, n) {
    return array.slice(1).reduce((acc, value) => {
        const accDiff = Math.abs(acc - n);
        const valueDiff = Math.abs(value -n);
        if (accDiff == valueDiff) {
            return acc > value ? value : acc;
        } else {
            return accDiff > valueDiff ? value : acc;    
        }
    }, array[0]);
}