function solution(s, n) {
    const A_CODE = 'A'.charCodeAt(0);
    const Z_CODE = 'Z'.charCodeAt(0);
    const a_CODE = 'a'.charCodeAt(0);
    const z_CODE = 'z'.charCodeAt(0);
    const SPACE_CODE = ' '.charCodeAt(0);
    
    return s.split('').map(value => {
        let code = value.charCodeAt(0);
        if (code !== SPACE_CODE) {
            if (code < a_CODE) {
                code = ((code - A_CODE + n) % 26) + A_CODE
            } else {
                code = ((code - a_CODE + n) % 26) + a_CODE
            }
        }
        return String.fromCharCode(code);
    }).join('');
}