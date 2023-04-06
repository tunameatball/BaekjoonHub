function solution(n, arr1, arr2) {
    var answer = [];
    arr1.forEach((value, index) => {
        const num = value|arr2[index];
        const str = num.toString(2).padStart(n, '0').replaceAll('1', '#').replaceAll('0', ' ');
        answer.push(str);
    })
    return answer;
}