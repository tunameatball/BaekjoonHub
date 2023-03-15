function solution(my_string) {
    const reg = /a|e|i|o|u/g
    return my_string.split(' ').map(value => value.replaceAll(reg, '')).join(' ');
}