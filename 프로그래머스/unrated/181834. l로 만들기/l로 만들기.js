function solution(myString) {
    let reg = /[a-k]/g
    return myString.replace(reg, 'l');
}