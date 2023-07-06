function solution(myString) {
    return myString.split('x').filter(value => value.length > 0).sort();
}