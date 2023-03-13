function solution(arr1, arr2) {
    var answer = [];
    arr1.forEach((arr1Value, arr1Index) => {
        answer.push([]);
        arr1Value.forEach((arr2Value, arr2Index) => {
            answer[arr1Index].push(arr2[arr1Index][arr2Index] + arr2Value);
        })
    });
    return answer;
}