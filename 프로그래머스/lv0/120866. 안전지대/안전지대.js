function solution(board) {
    let answer = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                let downI = i - 1 >= 0 ? i - 1 : 0;
                let upI = i + 1 < board.length ? i + 1 : board.length - 1;
                let downJ = j - 1 >= 0 ? j - 1 : 0;
                let upJ = j + 1 < board.length ? j + 1 : board.length - 1;
                
                board[downI][j] = board[downI][j] != 1 ? -1 : 1;
                board[upI][j] = board[upI][j] != 1 ? -1 : 1;
                board[i][downJ] = board[i][downJ] != 1 ? -1 : 1;
                board[i][upJ] = board[i][upJ] != 1 ? -1 : 1;
                board[downI][downJ] = board[downI][downJ] != 1 ? -1 : 1;
                board[downI][upJ] = board[downI][upJ] != 1 ? -1 : 1;
                board[upI][downJ] = board[upI][downJ] != 1 ? -1 : 1;
                board[upI][upJ] = board[upI][upJ] != 1 ? -1 : 1;
            }
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === 0) {
                answer += 1;
            }
        }
    }
    return answer;
}