function solution(my_string, s, e) {
    const s1 = my_string.slice(0, s);
    const middle = my_string.slice(s, e + 1).split('').reverse().join('');
    const s2 = my_string.slice(e + 1);
    
    return `${s1}${middle}${s2}`;
}