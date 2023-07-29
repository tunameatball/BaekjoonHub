function solution(my_string, overwrite_string, s) {
    const first = my_string.slice(0, s);
    const last = my_string.slice(s + overwrite_string.length);
    return first + overwrite_string + last;
}