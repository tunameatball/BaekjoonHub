function solution(sides) {
    const tri = sides.sort((a, b) => b - a);
    return tri[0] < tri[1] + tri[2] ? 1 : 2
}