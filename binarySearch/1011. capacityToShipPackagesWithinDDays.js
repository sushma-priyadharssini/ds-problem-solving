/* 
A conveyor belt has packages that must be shipped from one port to another within days days.
The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

Example 1:

Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10
 */

var shipWithinDays = function (weights, days) {
  let l = Math.max(...weights);
  let r = weights.reduce((a, b) => a + b, 0);
  let res = r;

  function canShip(m) {
    let count = 1;
    let tempw = 0;
    for (let w of weights) {
      if (tempw + w > m) {
        count++;
        if (count > days) {
          return false;
        }
        tempw = 0;
      }
      tempw += w;
    }
    return true;
  }

  while (l <= r) {
    const cap = Math.floor((l + r) / 2);
    if (canShip(cap)) {
      res = Math.min(res, cap);
      r = cap - 1;
    } else {
      l = cap + 1;
    }
  }
  return res;
};
