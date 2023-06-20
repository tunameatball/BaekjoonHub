function solution(num_list, n) {
    let tempList = num_list.splice(0, n);
    return [...num_list, ...tempList];
}