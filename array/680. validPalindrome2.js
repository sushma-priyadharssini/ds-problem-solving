/* 
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 */

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

var validPalindrome = function (s) {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      return isPalindrome(s, p1 + 1, p2) || isPalindrome(s, p1, p2 - 1);
    }
    p1++;
    p2--;
  }
  return true;
};
