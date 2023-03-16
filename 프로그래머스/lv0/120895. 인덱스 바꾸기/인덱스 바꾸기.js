function solution(my_string, num1, num2) {
    const num1Str = my_string[num1];
    const num2Str = my_string[num2];
    const arr = my_string.split('');
    arr[num1] = num2Str;
    arr[num2] = num1Str;
    return arr.join('');
}