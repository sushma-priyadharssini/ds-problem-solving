// Given an integer array nums, 
// return true if any value appears at least twice in the array, and 
// return false if every element is distinct.

var containsDuplicate = function(nums) {
  let myMap = new Map();
  for(let i=0; i<nums.length; i++) {
      if(myMap.has(nums[i])) {
          return true;
      } else if(i === nums.length-1) {
          return false;
      } else {
          myMap.set(nums[i], 1);
      }
  }
};

var containsDuplicate = (nums) => {
  const numsSet = new Set(nums);/* Time O(N) | Space O(N) */
  const isEqual = numsSet.size === nums.length;

  return !isEqual;
};
