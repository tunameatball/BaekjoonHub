function solution(my_string) {
    return my_string.split('').map(value => value.toLowerCase()).sort().join('');
    
}