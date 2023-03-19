function solution(spell, dic) {
    let answer = 2;
    for (let dict of dic) {
        if (dict.length >= spell.length) {
            for (let s of spell) {
                dict = dict.replace(s, '');
            }
            if (dict.length == 0) {
                answer = 1;
                break;
            }    
        }
    }
    return answer;
}