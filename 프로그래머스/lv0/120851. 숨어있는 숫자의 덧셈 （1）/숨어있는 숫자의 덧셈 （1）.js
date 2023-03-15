function solution(my_string) {
    return my_string.replace(/[^0-9]/g, '').split('').reduce((acc, value) => acc += parseInt(value), 0);
}