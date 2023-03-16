function solution(s) {
    const count = {};
    s.split('').forEach(value => {
        if (!count[value]) {
            count[value] = 1;
        } else {
            count[value] += 1;
        }
    });
    return Object.keys(count).filter(key => count[key] == 1).sort().join('');
}