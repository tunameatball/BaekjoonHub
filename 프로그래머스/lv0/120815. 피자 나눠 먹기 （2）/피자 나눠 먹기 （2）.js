function solution(n) {
    let pizza = n > 6 ? n : 6;
    while(true) {
        if (pizza % n == 0 && pizza % 6 == 0) {
            break;
        }
        pizza++;
    }
    return pizza / 6;
}