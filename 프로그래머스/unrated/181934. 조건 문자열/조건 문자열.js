function solution(ineq, eq, n, m) {
    const oper = `${n} ${ineq}${eq === '!' ? '' : eq} ${m}`;
    return eval(oper) ? 1 : 0;
}