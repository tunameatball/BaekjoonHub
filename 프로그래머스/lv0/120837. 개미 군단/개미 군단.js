function solution(hp) {
    const ant = [5, 3, 1];
    return ant.reduce((acc, ant, index) => {
        acc += Math.floor(hp / ant);
        hp %= ant;
        return acc;
    }, 0);
}