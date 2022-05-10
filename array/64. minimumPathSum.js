/* Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
 */

var minPathSum = function(grid) {
    var m = grid.length;
  var n = (grid[0] || []).length;
  var dp = Array(m);
  var left = 0;
  var top = 0;

  if (!m || !n) return 0;

  for (var i = 0; i < m; i++) {
    dp[i] = Array(n);
    for (var j = 0; j < n; j++) {
      left = j === 0 ? Number.MAX_SAFE_INTEGER : dp[i][j - 1];
      top = i === 0 ? Number.MAX_SAFE_INTEGER : dp[i - 1][j];
      dp[i][j] = grid[i][j] + 
        ((i === 0 && j === 0) ? 0 : Math.min(left, top));
    }
  }
  return dp[m - 1][n - 1];
};