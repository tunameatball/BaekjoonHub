function solution(my_string) {
    return my_string.split('').map(value => {
        if (value.toLowerCase() === value) {
            return value.toUpperCase();
        } else {
            return value.toLowerCase();
        }
    }).join('')
}