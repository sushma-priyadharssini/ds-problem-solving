/*
 * Divide and Conquer
 * while conquering - use 2 pointer technique
 * 2 separate pointers pointing to each item to be merged and 3rd pointer the desired merging position
 * 
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 */

function mergeSort(arr, l, r) {
  if (l >= r) return;
  let m = Math.floor((l + r) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

function merge(arr, l, m, r) {
  let temp = [];
  let i = l,
    j = m + 1; //pointers
  while (i <= m && j <= r) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i++]);
    } else {
      temp.push(arr[j++]);
    }
  }

  while (i <= m) temp.push(arr[i++]); // push the rest in the left array
  while (j <= r) temp.push(arr[j++]); // push the rest in the right array

  for (let i = l; i <= r; i++) {
    arr[i] = temp[i - l];
  }
}

function sortArray(nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}
