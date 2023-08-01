function solution(arr) {
    let i = 0;
    let stk = [];
    while(i < arr.length) {
        const value = arr[i];
        if (stk.length == 0) {
            stk.push(value);
            i += 1;
        } else if (stk.at(-1) < value) {
            stk.push(value);
            i += 1;
        } else if (stk.at(-1) >= value) {
            stk = stk.slice(0, stk.length - 1);
        }
    }
    
    return stk;
}