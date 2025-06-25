/* 
Input
["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
Output
[null, 8, 11, 12]

Explanation
NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)
 */

// 1. Brute force
class NumMatrix1 {
  constructor(arr) {
    this.matrix = arr;
  }

  /**
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @return {number}
   */

  // Time Complexity: O(m*n)
  sumRegion(row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        sum += this.matrix[i][j];
      }
    }
    return sum;
  }
}

// 2. One Dimensional Prefix Sum

class NumMatrix2 {
  constructor(matrix) {
    this.prefixSum = Array.from({ length: matrix.length }, () =>
      Array(matrix[0].length).fill(0)
    );

    for (let row = 0; row < matrix.length; row++) {
      this.prefixSum[row][0] = matrix[row][0];
      for (let col = 1; col < matrix[0].length; col++) {
        this.prefixSum[row][col] =
          this.prefixSum[row][col - 1] + matrix[row][col];
      }
    }
  }

  // Time Complexity: O(m)
  sumRegion(row1, col1, row2, col2) {
    let res = 0;
    for (let row = row1; row <= row2; row++) {
      if (col1 > 0) {
        res += this.prefixSum[row][col2] - this.prefixSum[row][col1 - 1];
      } else {
        res += this.prefixSum[row][col2];
      }
    }
    return res;
  }
}

class NumMatrix3 {
  constructor(matrix) {
    const ROWS = matrix.length,
      COLS = matrix[0].length;
    this.sumMat = Array.from({ length: ROWS + 1 }, () =>
      Array(COLS + 1).fill(0)
    );

    for (let r = 0; r < ROWS; r++) {
      let prefix = 0;
      for (let c = 0; c < COLS; c++) {
        prefix += matrix[r][c];
        const above = this.sumMat[r][c + 1];
        this.sumMat[r + 1][c + 1] = prefix + above;
      }
    }
  }

  // Time Complexity: O(1)
  sumRegion(row1, col1, row2, col2) {
    row1++;
    row2++;
    col1++;
    col2++;
    const bottomRight = this.sumMat[row2][col2];
    const above = this.sumMat[row1 - 1][col2];
    const left = this.sumMat[row2][col1 - 1];
    const topLeft = this.sumMat[row1 - 1][col1 - 1];
    return bottomRight - above - left + topLeft;
  }
}

var numMatrix = new NumMatrix3([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // return 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // return 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // return 12
