// Given an integer array nums and an integer k, return the k most frequent elements. 

// another way is to use sorting


var topKFrequent = function (nums, k) {
  var hMap = new Map();
  var arr = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
      let val = hMap.get(nums[i]) || 0;
      hMap.set(nums[i], val + 1);
  }

  for ([index, value] of hMap) {
      let arrValue = arr[value] || [];
      arrValue.push(index);
      arr[value] = arrValue;
  }
  arr.reverse();
  let res = [];
  for (let iVal of arr) {
      if (k === 0) break;
      if (iVal) {
          for (let jVal of iVal) {
              res.push(jVal);
              k--;
          }
      }
  }
  return res;
};