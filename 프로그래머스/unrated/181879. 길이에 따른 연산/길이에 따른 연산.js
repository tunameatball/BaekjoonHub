function solution(num_list) {
    return num_list.length >= 11 ? 
        num_list.reduce((acc, value) => {
            acc += value;
            return acc;
        }, 0) :
        num_list.reduce((acc, value) => {
            acc *= value;
            return acc;
        }, 1);
}