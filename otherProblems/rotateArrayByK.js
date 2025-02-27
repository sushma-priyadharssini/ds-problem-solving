// Rotate array by K - rotate array to the right by k steps
// input = [1,2,3,4,5,6,7], k=3 ===> [5,6,7,1,2,3,4]

const rotateArray = (nums, k) => {
  const size = nums.length;
  if (k > size) {
    k = k % size;
  }

  if (k === size) {
    return nums;
  }

  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated);
  return nums;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 8));

const rotateArrayOptimized = (nums, k) => {
  const size = nums.length;
  if (k > size) {
    k = k % size;
  }
  reverse(nums, 0, size - 1); // O(n)
  reverse(nums, 0, k - 1); // O(k)
  reverse(nums, k, size - 1); // O(n-k)
  return nums;
};

console.log(rotateArrayOptimized([1, 2, 3, 4, 5, 6, 7], 8));

const reverse = (nums, left, right) => {
  while (left < right) {
    let tmp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = tmp;
  }
};
