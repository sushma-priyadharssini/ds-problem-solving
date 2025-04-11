// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// ------------ using division operation ------------

var productExceptSelf1 = function (nums) {
  let l = nums.length;
  let product = 1;
  let zeroIndex;
  let res = []
  for (let i = 0; i < l; i++) {
      if (nums[i] === 0 && zeroIndex) product = 0
      if (nums[i] === 0 && zeroIndex === undefined) {
          zeroIndex = i;
      } else {
          product = product * nums[i];
      }

  }

  for (let i = 0; i < l; i++) {
      if (product === 0) res[i] = 0
      else if (zeroIndex !== undefined && i === zeroIndex) {
          res[i] = product;
      } else if (zeroIndex !== undefined && i !== zeroIndex) {
          res[i] = 0;
      } else {
          res[i] = product / nums[i];
      }

  }
  return res;
};


// ------------ without using division operation ------------


function productExceptSelf2(nums) {
    const result = [];
    let prefix = 1;
    let postfix = 1;
    
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    console.log("after prefix loop", result)
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        result[i] *= postfix;
    }
    console.log("after postfix loop", result)
    
    return result;
};

const res = productExceptSelf2([1,2,3,4]);
console.log("res", res)

