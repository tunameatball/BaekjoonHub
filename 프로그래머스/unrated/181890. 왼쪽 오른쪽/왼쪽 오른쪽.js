function solution(str_list) {
    for (let index = 0; index < str_list.length; index++) {
        const value = str_list[index];
        if (value === 'l') {
            return str_list.slice(0, index);
        } else if (value === 'r') {
            return str_list.slice(index + 1);
        }
    }
    return [];
}