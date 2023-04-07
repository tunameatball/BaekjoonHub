function solution(players, callings) {
    const score = players.reduce((acc, value, index) => {
        acc[value] = index;
        return acc;
    }, {});
    
    callings.forEach(value => {
        const index = score[value];
        const temp = players[index - 1];
        
        [players[index - 1], players[index]] = [value, temp];
        score[temp] += 1;
        score[value] -= 1;
    });
    return players;
}