function solution(age) {
    const aCode = 'a'.charCodeAt(0);
    
    return age.toString().split('').map(value => {
        const code = parseInt(aCode) + parseInt(value);
        return String.fromCharCode(code);
    }).join('');
}