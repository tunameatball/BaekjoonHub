function solution(dartResult) {
    const dartScore = {
        'S' : 1,
        'D' : 2,
        'T' : 3
    };
    
    const reg = /[1]?\d[S|D|T]*[#|*]?/g
    const darts = [...dartResult.matchAll(reg)].map(value => value[0]);
    
    const scores = [];
    darts.forEach(value => {
        let dart = '';
        let option = value.at(-1);
        let score = 0;
        
        if (value.indexOf('10') !== -1) {
            score = value.substring(0, 2);
            dart = value.at(2);
        } else {
            score = value.at(0);
            dart = value.at(1);
        }
        
        score = Math.pow(score, dartScore[dart]);
        
        if (option == '*') {
            score *= 2;
            scores[scores.length - 1] *= 2;
        } else if (option == '#') {
            score *= -1;
        }
        
        scores.push(score);
    });
    
    return scores.reduce((count, value) => {
        count += value;
        return count;
    }, 0);
}