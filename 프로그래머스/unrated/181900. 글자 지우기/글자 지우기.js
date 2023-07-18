function solution(my_string, indices) {
    let result = my_string;
    indices.sort((a, b) => a - b);
    indices.forEach((value, index) => {
        result = removeChar(result, value - index);
    });
    return result;
}

const removeChar = (str, index) => str.substring(0, index) + str.substring(index + 1);