/*
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can contain is 49.
 */

var maxArea = function (height) {
  let max = 0;
  let p1 = 0;
  let p2 = height.length - 1;

  while (p1 < p2) {
    const width = p2 - p1;
    const length = Math.min(height[p1], height[p2]);
    const volume = width * length;
    if (height[p1] > height[p2]) {
      p2--;
    } else if (height[p1] < height[p2]) {
      p1++;
    } else {
      p1++;
      p2--;
    }
    max = Math.max(max, volume);
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
