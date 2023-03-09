function solution(strings, n) {
    return strings.map(value => {
        return `${value[n]}${value}`
    }).sort((a, b) => a > b ? 1 : -1).map(value => value.slice(1));
}