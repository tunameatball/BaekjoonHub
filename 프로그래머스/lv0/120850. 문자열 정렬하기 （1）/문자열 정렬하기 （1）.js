function solution(my_string) {
    return my_string.replace(/[^0-9]/g, '').split('').map(value => parseInt(value)).sort((a, b) => a - b);
}