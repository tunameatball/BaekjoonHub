function solution(quiz) {
    return quiz.map(value => {
        value = value.replace('=', '==');
        if (eval(value)) {
            return "O";
        } else {
            return "X";
        }
    });
}