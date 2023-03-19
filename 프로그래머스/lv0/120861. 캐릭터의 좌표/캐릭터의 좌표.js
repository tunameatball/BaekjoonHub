function solution(keyinput, board) {
    const cmd = {
      up: (board, coordinate) => {
          if (Math.floor(board[1] /2) > coordinate[1]) {
            coordinate[1] += 1;    
          }
      },
      down: (board, coordinate) => {
          if (-1 * Math.floor(board[1] /2) < coordinate[1]) {
            coordinate[1] -= 1;    
          }
      },
      left: (board, coordinate) => {
          if (-1 * Math.floor(board[0] /2) < coordinate[0]) {
            coordinate[0] -= 1;    
          }
      },
      right: (board, coordinate) => {
          if (Math.floor(board[0] /2) > coordinate[0]) {
            coordinate[0] += 1;    
          }
      }
    };
    
    return keyinput.reduce((acc, value) => {
        cmd[value](board, acc);
        return acc;
    }, [0, 0]);
}