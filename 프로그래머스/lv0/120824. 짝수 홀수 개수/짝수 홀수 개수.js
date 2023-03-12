function solution(num_list) {
    return num_list.reduce((acc, value) => {
        acc[value % 2] += 1;
        return acc;
    }, [0, 0]);
}