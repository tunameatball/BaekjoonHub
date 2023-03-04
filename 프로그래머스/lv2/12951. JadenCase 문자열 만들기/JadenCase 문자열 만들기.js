function solution(s) {
    return s.split(' ').map(value => {
        if (value == '') {
            return value;
        }
        let newWord = '';
        if (parseInt(value[0]) == NaN) {
            newWord += value[0];
        } else {
            newWord += value[0].toUpperCase();
        }
        if (value.length > 1) {
            newWord += value.slice(1).toLowerCase();            
        }
        
        return newWord;
    }).join(' ');
}