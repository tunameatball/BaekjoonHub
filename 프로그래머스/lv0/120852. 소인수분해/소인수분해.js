function solution(n) {
    const set = new Set();
    let temp = n;
    let i = 2;
    while (temp != 1) {
        if (temp % i == 0) {
            set.add(i);
            temp /= i
            i -= 1;
        }
        i += 1;        
    } 
    return [...set];
}