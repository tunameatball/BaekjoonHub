function solution(lines) {
    const line = {};
    lines.forEach(value => {
        for (let n = value[0]; n < value[1]; n++) {
            if (line[n]) {
                line[n] += 1;
            } else {
                line[n] = 1;
            }
        }
    });
    
    return Object.values(line).filter(value => value >= 2).length;
}