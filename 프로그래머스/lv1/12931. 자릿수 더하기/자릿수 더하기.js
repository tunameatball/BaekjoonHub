function solution(n)
{
    var answer = 0;

    `${n}`.split('').forEach(value => answer += parseInt(value));

    return answer;
}