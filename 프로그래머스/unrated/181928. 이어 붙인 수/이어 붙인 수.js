function solution(num_list) {
    let odd = '';
    let even = '';
    
    num_list.forEach(num => {
        if (num % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }
    });
    
    return Number(odd.length == 0 ? '0' : odd) + Number(even.length == 0 ? '0' : even);
    
}