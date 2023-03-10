function solution(array) {
    var answer = 0;
    const counts = array.reduce((acc, value) => {
        if (acc[value] == undefined) {
            acc[value] = 1;
        } else {
            acc[value] += 1;
        }
        
        return acc;
    }, {});
    
    const max = Math.max(...Object.values(counts));
    
    const maxs = Object.keys(counts).filter((value) => counts[value] == max);
    
    return maxs.length > 1 ? -1 : parseInt(maxs[0]);
}