/* Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition. */

var isValidSudoku = function(board) {
    let map = {};
    let val = 0;
    for(let i=0; i<board.length; i++) {
        for(let j=0; i<board[i].length; j++) {
            val = board[i][j];
            if(val === '.') continue;
            if( map['i'+i+val] ||
                map['j'+j+val] ||
                map['b'+Math.floor(i/3)+Math.floor(j/3)+val]) return false
            map['i'+i+val]=1;
            map['j'+j+val]=1;
            map['b'+Math.floor(i/3)+Math.floor(j/3)+val]=1;
        }
    }
    return true;
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
