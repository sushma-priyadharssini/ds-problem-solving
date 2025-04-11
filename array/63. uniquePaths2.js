// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid

var uniquePathsWithObstacles = function (obstacleGrid) {
  var m = obstacleGrid.length;
  var n = (obstacleGrid[0] || []).length;
  var dp = Array(m);
  var left = 0;
  var top = 0;

  if (!m || !n) return 0;

  for (var i = 0; i < m; i++) {
    dp[i] = Array(n);
    for (var j = 0; j < n; j++) {
      left = j === 0 || obstacleGrid[i][j - 1] === 1 ? 0 : dp[i][j - 1];
      top = i === 0 || obstacleGrid[i - 1][j] === 1 ? 0 : dp[i - 1][j];
      dp[i][j] =
        obstacleGrid[i][j] === 1 ? 0 : i === 0 && j === 0 ? 1 : left + top;
    }
  }

  return dp[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
