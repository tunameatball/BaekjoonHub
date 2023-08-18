function solution(arr) {
//     const pow = Math.ceil(Math.pow(arr.length, 0.5));
    
//     return new Array(...arr, ...new Array(Math.pow(2, pow) - arr.length).fill(0));
    
    let pow = 0;
    while(Math.pow(2,pow) < arr.length) {
        pow += 1;
    }
    
    
    return pow > 0 ? new Array(...arr, ...new Array(Math.pow(2, pow) - arr.length).fill(0)) : arr;
}