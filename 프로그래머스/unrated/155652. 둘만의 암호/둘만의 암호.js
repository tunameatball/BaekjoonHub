function solution(s, skip, index) {
    var answer = '';
    const aCode = 'a'.charCodeAt();
    const zCode = 'z'.charCodeAt();
    const skipCodes = skip.split('').map(skipChar => skipChar.charCodeAt());
    
    const alphabetCodes = [...Array(zCode - aCode + 1).keys()].map(key => key + aCode).filter(code => !skipCodes.includes(code));
    
    for (const str of s) {
        let strCharCode = str.charCodeAt();
        let strIndex = alphabetCodes.indexOf(strCharCode) + index;
        while (strIndex >= alphabetCodes.length) {
            strIndex -= alphabetCodes.length
        }
        answer += String.fromCharCode(alphabetCodes[strIndex]);
    }
    return answer;
}