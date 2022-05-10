/* Example 1:
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
Example 2:

Input: n = 1
Output: [[1]] */

var generateMatrix = function(n) {
    let sr=0;
    let sc=0;
    let er=n;
    let ec=n;
    let counter=1;
    let i=0;
    let res = Array(n).fill(0).map(_ => Array(n));
    
    while(sr<er && sc<ec) {
        for(i=sc;i<ec;++i){
            res[sr][i]=counter++;
        }
        sr++;
        
        for(i=sr;i<er;++i){
            res[i][ec-1]=counter++;
        }
        ec--;
        
        if(sc<ec) {
            for(i=ec-1;i>=sc;--i){
                res[er-1][i]=counter++;
            }
            er--;
        }
         
        if(sr<er) {
            for(i=er-1;i>=sr;--i){
                res[i][sc]=counter++;
            }
            sc++;
        }
    }
    return res;
    
};

console.log(generateMatrix(3))