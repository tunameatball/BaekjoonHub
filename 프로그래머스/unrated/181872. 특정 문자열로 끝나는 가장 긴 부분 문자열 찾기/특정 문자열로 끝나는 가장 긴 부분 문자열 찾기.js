function solution(myString, pat) {
    let index = myString.lastIndexOf(pat);
    console.log(index);
    return myString.slice(0, index + pat.length);
}