/*
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

var majorityElement = function (nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};

var majorityElement = function (nums) {
  const myMap = new Map();
  let maj = 0;
  let res = null;

  for (let i = 0; i < nums.length; i++) {
    let count = myMap.get(nums[i]) || 0;
    const newCount = count + 1;
    myMap.set(nums[i], newCount);
    if (newCount > maj) {
      maj = newCount;
      res = nums[i];
    }
  }
  return res;
};
