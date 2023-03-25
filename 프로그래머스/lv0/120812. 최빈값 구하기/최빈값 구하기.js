function solution(array) {
    var answer = 0;
    const counts = array.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        
        return acc;
    }, {});
    
    const max = Math.max(...Object.values(counts));
    
    const maxs = Object.keys(counts).filter((value) => counts[value] == max);
    
    return maxs.length > 1 ? -1 : parseInt(maxs[0]);
}