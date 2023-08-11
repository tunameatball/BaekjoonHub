function solution(a, b, c, d) {
    let answer = Math.min(a, b, c, d);
    
    const board = {};
    board[a] = (board[a] | 0) + 1;
    board[b] = (board[b] | 0) + 1;
    board[c] = (board[c] | 0) + 1;
    board[d] = (board[d] | 0) + 1;
    
    const keyCount = Object.keys(board).length;
    
    if (keyCount == 1) {
        answer = Number(a) * 1111;
    } else if (keyCount == 2) {
        const [key1, key2] = Object.keys(board).map(Number);
        if (board[key1] == board[key2]) {
            answer = (key1 + key2) * Math.abs(key1 - key2);
        } else {
            let p = key1;
            let q = key2;
            if (board[key1] < board[key2]) {
                p = key2;
                q = key1;
            }
            
            answer = Math.pow((10 * p + q), 2);
        }
    } else if (keyCount == 3) {
        answer = Object.keys(board).reduce((acc, key) => {
            if (board[key] == 1) {
                acc *= Number(key);
            }
            return acc;
        }, 1);
    }
    
    return answer;
}