function solution(my_string, index_list) {
    return index_list.reduce((acc, value) => {
        acc += my_string.at(value);
        return acc;
    }, '');
}