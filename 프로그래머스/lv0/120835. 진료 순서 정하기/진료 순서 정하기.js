function solution(emergency) {
    const priority = [...emergency].sort((a, b) => b - a).reduce((acc, value, index) => {
        acc[value] = index + 1;
        return acc;
    }, {});
    return emergency.map(value => priority[value]);
}