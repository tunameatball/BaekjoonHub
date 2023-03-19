function solution(dots) {
    const [xList, yList] = dots.reduce((acc, value) => {
        acc[0].push(value[0]);
        acc[1].push(value[1]);
        return acc;
    }, [[], []]);
    return (Math.max(...xList) - Math.min(...xList)) * (Math.max(...yList) - Math.min(...yList));
}