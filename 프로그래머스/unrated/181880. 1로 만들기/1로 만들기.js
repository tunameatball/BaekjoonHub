function solution(num_list) {
    return num_list.reduce((acc, value) => {
        let number = value;
        while(number != 1) {
            if (number % 2 == 0) {
                number /= 2;
            } else {
                number = (number - 1) / 2;
            }
            acc += 1;
        }
        
        return acc;
    }, 0);
}