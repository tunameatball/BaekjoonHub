function solution(A,B){
    var answer = 0;

    const aList = A.sort((a, b) => a - b);
    const bList = B.sort((a, b) => b - a);
    
    for (let i = 0; i < aList.length; i++) {
        answer += aList[i] * bList[i];
    }

    return answer;
}