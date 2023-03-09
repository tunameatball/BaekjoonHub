function solution(price, money, count) {
    const totalPrice = count * (price + price * count) / 2;
    
    const result = totalPrice >= money ? totalPrice - money : 0 
    return result;
}