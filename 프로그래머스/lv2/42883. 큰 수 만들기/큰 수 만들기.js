function solution(number, k) {
    const stack = [];
    for (let i = 0; i < number.length; i++) {
        const n = number[i];
        while (stack.length > 0 && stack[stack.length - 1] < n && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(n);
    }
    
    stack.splice(-k, k);
    return stack.join('');
}