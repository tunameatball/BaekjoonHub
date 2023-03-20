function solution(idPw, db) {
    var answer = 'fail';
    for (let info of db) {
        if (info[0] === idPw[0] && info[1] === idPw[1]) {
            answer = 'login';
            break;
        } else if (info[0] === idPw[0] && info[1] !== idPw[1]) {
            answer = 'wrong pw';
            break;
        }
    }
    return answer;
}