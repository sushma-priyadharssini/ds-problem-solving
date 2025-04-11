// Given an integer array nums sorted in non-decreasing order, remove the duplicated in-place such that each unique elements appears only once.
// The relative order of the elements should be kept the same.
// then return the number of unique elements in nums

const removeDuplicates = (nums) => {
  for(let i=0; i< nums.length-1; i++) { // O(n)
		if(nums[i]===nums[i+1]) {
    	nums.splice(i+1,1); // O(1)
      i--;
    }
  }
  return nums.length;
}

console.log(removeDuplicates([0,0,1,1,2,2,3,3,3,4]));


/* 2 pointer approach */
const removeDuplicatesWithoutJs = (nums) => {
  if (nums.length === 0) return 0;
  let i=0;
  for(let j=1; j<nums.length; j++) {
    if(nums[i]!==nums[j]) {
      i++;
      nums[i]=nums[j];
    }
  }
  return i+1;
}

console.log(removeDuplicatesWithoutJs([0,0,1,1,2,2,3,3,3,4]))