function solution(s){
    const regP = /[^p]/g;
    const regY = /[^y]/g;
    const str = s.toLowerCase();
    return str.replace(regP, '').length == str.replace(regY, '').length;
}