
// dp approach - Time Complexity: O(k*n^2), Auxiliary Space: O(n*k). 
var superEggDrop = function(k, n) {
    let dp = Array(n)
    for(let i=0;i<(n+1);i++) {
        dp[i]=new Array(k+1);
    }

    for(let i=1;i<=n;i++) {
        dp[i][1] = i
    }

    for(let i=1;i<=k;i++) {
        dp[0][i] = 0
        dp[1][i] = 1
    }

    for(let i=2; i<=n; i++) {
        for(let j=2; j<=k; j++) {
            dp[i][j] = Number.MAX_VALUE;
            for(let x=1; x<=i; x++) {
                let res = 1+ Math.max(dp[x-1][j-1], dp[i-x][j])
                if(res<dp[i][j]) dp[i][j]=res
            }
        }
    }

    return dp[n][k]
}


// Recursive approach -  time complexity is exponential, Auxiliary Space :O(1).
let superEggDrop1 = function(k, n) {
    if(k===1) return n
    if(n===1 || n===0) return n

    let min = Number.MAX_VALUE;
    let x, res;

    for(x=1; x<=n; x++) {
        res = Math.max(superEggDrop1(k-1, x-1), superEggDrop1(k, n-x))
        if(res<min) min=res
    }
    return min+1
    
}
console.log(superEggDrop(8,10000))