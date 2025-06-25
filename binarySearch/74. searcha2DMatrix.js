/* 
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
 */

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let l = 0,
    r = m - 1;
  while (l <= r) {
    let midr = Math.floor((l + r) / 2);

    if (target > matrix[midr][n - 1]) {
      l = midr + 1;
    } else if (target < matrix[midr][0]) {
      r = midr - 1;
    } else {
      break;
    }
  }

  //  if it didnt break out of loop in else case instead l>r and loop broke
  if (!(l <= r)) {
    return false;
  }

  const row = Math.floor((l + r) / 2);
  l = 0;
  r = n - 1;
  while (l <= r) {
    let midc = Math.floor((l + r) / 2);

    if (target > matrix[row][midc]) {
      l = midc + 1;
    } else if (target < matrix[row][midc]) {
      r = midc - 1;
    } else {
      return true;
    }
  }
  return false;
};
