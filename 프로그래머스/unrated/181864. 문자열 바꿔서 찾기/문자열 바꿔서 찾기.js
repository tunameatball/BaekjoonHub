function solution(myString, pat) {
    let convertedString = myString.split('').map(value => {
        if (value == 'A') return 'B'
        else if (value == 'B') return 'A'
        else return value;
    }).join('');
    return convertedString.includes(pat) ? 1 : 0;
}