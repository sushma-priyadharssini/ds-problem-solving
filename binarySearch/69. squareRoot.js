/* 
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
 */
var mySqrt = function (x) {
  let l = 0,
    r = x,
    res = 0;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const product = mid * mid;
    if (product < x) {
      res = mid;
      l = mid + 1;
    } else if (product > x) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return res;
};
