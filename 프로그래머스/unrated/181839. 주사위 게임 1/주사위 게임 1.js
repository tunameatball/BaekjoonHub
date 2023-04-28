function solution(a, b) {
    let result = 0;
    switch(a % 2 + b % 2) {
        case 0:
            result = Math.abs(a - b);
            break;
        case 1:
            result = 2 * (a + b);
            break;
        case 2:
            result = Math.pow(a, 2) + Math.pow(b, 2);
            break;
    }
    return result;
}