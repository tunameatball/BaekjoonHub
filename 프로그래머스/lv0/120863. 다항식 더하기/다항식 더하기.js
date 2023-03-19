function solution(polynomial) {
    let xNumber = 0;
    let number = 0;
    
    polynomial.split(' + ').forEach(value => {
        if (value.includes('x')) {
            xNumber += value.length == 1 ? 1 : Number(value.replace('x', ''));
        } else {
            number += Number(value);
        }
    });
    const xStr = xNumber != 0 ? xNumber == 1 ? 'x' : `${xNumber}x` : '';
    const nStr = number != 0 ? `${number}` : '';
    const oper = xStr && nStr ? ' + ' : '';
    
    return `${xStr}${oper}${nStr}`;
}