/* Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5] */


var spiralOrder = function(matrix) {
    let i;
    let sr=0; let er=matrix.length; let sc=0; let ec=matrix[0].length;
    let res = [];
    
    while(sr<er && sc<ec) {
        for(i=sc;i<ec;++i) {
            res.push(matrix[sr][i]);
        }
        sr++;
        for(i=sr;i<er;++i) {
            res.push(matrix[i][ec-1]);
        }
        ec--;
        if (sr < er) {
            for (i = ec - 1; i >=sc; --i) {
                 res.push(matrix[er - 1][i]);
            }
            er--;
        }
        if (sc < ec) {
            for (i = er - 1; i >= sr; --i) {
                res.push(matrix[i][sc]);
            }
            sc++;
        }
    }
    return res;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))

