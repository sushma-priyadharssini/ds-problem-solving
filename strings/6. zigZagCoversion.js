/* 
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
 */

var convert = function(s, numRows) {
    const arr = [];
    for(let k = 0; k< numRows; k++) {
        arr[k] =[];
    }
    var count = 1;
    var op = '+';
    
    if (numRows > 1) {
        for(let i = 0; i< s.length; i++) {
            if(count === 1) {
                op = '+'
            } else if (count === numRows) {
                op = '-'
            }
            arr[count-1].push(s[i]);
            if (op === '+') count++;
            if (op === '-') count--;
        }
        return arr.flat().join('');
    } else {
        return s;
    }
};

console.log(convert('PAYPALISHIRING', 3))