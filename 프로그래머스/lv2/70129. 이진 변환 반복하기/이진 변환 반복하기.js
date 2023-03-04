function solution(s) {
    var answer = [];
    
    let str = s;
    let count = 0;
    let zeroCount = 0;
    
    while (str != '1') {
        count += 1;
        const newStr = str.replaceAll('0', '')
        zeroCount += str.length - newStr.length;
        str = newStr.length.toString(2);
    }
    return [count, zeroCount];
}