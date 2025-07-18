/* 
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 */

var reverseString = function (s) {
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 < p2) {
    [s[p1], s[p2]] = [s[p2], s[p1]];
    p1++;
    p2--;
  }
  return s;
};
