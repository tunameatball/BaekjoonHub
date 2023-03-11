function solution(price) {
    const discount = price / 100000 >= 5 ? 0.8 : price / 100000 >= 3 ? 0.9 : price / 100000 >= 1 ? 0.95 : 1
    return Math.floor(price * discount);
}