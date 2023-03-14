function solution(sizes) {
    let long = 1;
    let short = 1;
    sizes.forEach(value => {
        value.sort((a, b) => a - b);
        const [shortValue, longValue] = value;
        short = shortValue > short ? shortValue : short;
        long = longValue > long ? longValue : long;
    })
    return long * short;
}