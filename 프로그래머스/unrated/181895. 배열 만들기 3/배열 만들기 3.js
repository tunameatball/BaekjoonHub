function solution(arr, intervals) {
    const [[firstStart, firstEnd], [secondStart, secondEnd]] = intervals;
    
    return [...arr.slice(firstStart, firstEnd + 1), ...arr.slice(secondStart, secondEnd + 1)];
}