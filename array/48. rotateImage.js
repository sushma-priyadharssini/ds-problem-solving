/* Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 */

var rotate = function(matrix) {
    for(let i=0; i<matrix.length; i++) {
         let n = matrix[i].length;
        for(let j=i+1; j<n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    for(let i=0; i<matrix.length; i++) {
        let n = matrix[i].length;
        for(let j=0; j<n/2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j - 1];
            matrix[i][n - j - 1] = temp
        }
    }
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))