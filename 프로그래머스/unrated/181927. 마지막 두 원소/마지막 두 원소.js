function solution(num_list) {
    let value = num_list.at(-1) > num_list.at(-2) ? num_list.at(-1) - num_list.at(-2) : num_list.at(-1) * 2;
    
    num_list.push(value);
    return num_list;
}