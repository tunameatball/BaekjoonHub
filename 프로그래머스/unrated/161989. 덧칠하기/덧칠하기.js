function solution(n, m, section) {
    var answer = 0;
    section.sort((a, b) => a - b);
    while(section.length > 0) {
        const num = section.shift();
        while(section.length > 0) {
            if (section[0] < num + m) {
                section.shift();
            } else {
                break;
            }
        }
        answer++;
    }
    
    return answer;
}