function solution(n, m) {
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    
    let gcd = 1;
    for (let num = 1; num <= min; num++) {
        if (n % num === 0 && m % num === 0) {
            gcd = num;
        }
    }
    
    let lcm = max;
    while(lcm % n !== 0 || lcm % m !== 0) {
        lcm++;
    }
    
    return [gcd, lcm];
}