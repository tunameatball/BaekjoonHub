function solution(my_strings, parts) {
    return my_strings.reduce((acc, value, index) => {
        const [start, end] = parts[index];
        acc += value.slice(start, end + 1);
        return acc;
    }, '');
}