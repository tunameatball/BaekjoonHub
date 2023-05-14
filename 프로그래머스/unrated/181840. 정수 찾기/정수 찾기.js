function solution(num_list, n) {
    return num_list.filter(value => value == n).length ? 1 : 0;
}