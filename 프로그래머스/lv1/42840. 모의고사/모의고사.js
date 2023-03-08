function solution(answers) {
    var answer = [];
    
    const studentsAnswers = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    const answerCount = answers.reduce((acc, answer, index) => {
        studentsAnswers.forEach((guess, studentIndex) => {
            if (answer == guess[index % guess.length]) {
                acc[studentIndex] += 1;
            } 
        });
        return acc;
    }, [0, 0, 0]);
    
    const max = Math.max(...answerCount);
    
    return answerCount.reduce((acc, value, index) => {
        if (value == max) {
            acc.push(index + 1);    
        }
        return acc;
    }, []);
}