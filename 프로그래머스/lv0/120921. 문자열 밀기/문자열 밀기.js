function solution(A, B) {
    for (let i = 0; i < A.length; i++) {
        if (A == B) {
            return i;
        } else {
            const aList = [...A];
            const a = aList.pop();
            aList.unshift(a);
            A = aList.join('')
        }
    }
    return -1;
}