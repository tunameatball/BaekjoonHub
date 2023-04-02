function solution(name, yearning, photo) {
    const scores = {};
    name.forEach((value, index) => {
        scores[value] = yearning[index];
    });
    
    return photo.reduce((acc, value) => {
        let score = 0;
        value.forEach(value => {
            score += scores[value] ?? 0;
        });
        acc.push(score);
        return acc;
    }, []);
}