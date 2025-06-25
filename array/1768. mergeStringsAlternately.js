/* 
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
 */

var mergeAlternately = function (word1, word2) {
  let p1 = 0;
  let p2 = 0;
  let l1 = word1.length;
  let l2 = word2.length;
  let res = "";

  while (p1 < l1 && p2 < l2) {
    res += word1[p1] + word2[p2];
    p1++;
    p2++;
  }

  while (p1 < l1) {
    res += word1[p1];
    p1++;
  }

  while (p2 < l2) {
    res += word2[p2];
    p2++;
  }

  return res;
};
