function solution(n_str) {
    let index = n_str.search(/[1-9]/);
    return n_str.slice(index);
}