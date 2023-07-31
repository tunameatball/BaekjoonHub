function solution(code) {
    let mode = 0;
    const ret = code.split('').reduce((acc, value, index) => {
        if (mode == 0) {
            if (value == '1') {
                mode = 1;
            } else {
                if (index % 2 == 0) {
                    acc += value;
                }    
            }
        } else {
            if (value == '1') {
                mode = 0;
            } else {
                if (index % 2 == 1) {
                    acc += value;
                }
            }
        }
        
        return acc;
    }, '');
    
    return ret.length > 0 ? ret : 'EMPTY';
}