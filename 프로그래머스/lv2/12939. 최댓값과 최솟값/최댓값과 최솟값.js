function solution(s) {
    var answer = '';
    const chars = s.split(' ').map(value => parseInt(value));
    const min = Math.min(...chars);
    const max = Math.max(...chars);
    
    return `${min} ${max}`;
}