function solution(s) {
    var answer = 0;
    const stringList = [...s];
    let firstWord = stringList.shift();
    
    let firstCount = 1;
    let otherCount = 0;
    
    for (let char of stringList) {
        if (firstCount == 0 && otherCount == 0) {
            firstWord = char;
        }
        
        if (firstWord === char) {
            firstCount += 1;
        } else {
            otherCount += 1;
        }
        
        if (firstCount === otherCount) {
            firstCount = 0;
            otherCount = 0;
            answer += 1;
        }
    }
    
    if (firstCount != 0 || otherCount != 0) {
        answer += 1;
    }
    
    return answer;
}