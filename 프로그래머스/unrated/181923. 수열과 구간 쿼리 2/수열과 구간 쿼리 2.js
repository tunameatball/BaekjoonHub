function solution(arr, queries) {
    var answer = [];
    queries.forEach(query => {
        const [s, e, k] = query;
        
        let numList = [];
        
        for (let i = s; i <= e; i += 1) {
            if (arr[i] > k) {
                numList.push(arr[i]);
            }
        }
        
        if (numList.length == 0) {
            answer.push(-1);
        } else {
            answer.push(Math.min(...numList));
        }
    });
    return answer;
}