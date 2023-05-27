function solution(n, control) {
    const op = {
        'w' : 1,
        's' : -1,
        'd' : 10,
        'a' : -10
    };
    return control.split('').reduce((acc, value) => {
        acc += op[value];
        return acc;
    }, n);
}