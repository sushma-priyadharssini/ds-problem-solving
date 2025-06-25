/* 
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.
Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
 */

// Time Complexity: O(n*m), Space Complexity: O(n+m)
var checkAnagram = function (s1, s2) {
  let charMap = new Map();
  for (let i = 0; i < s1.length; i++) {
    charMap.set(s1[i], (charMap.get(s1[i]) || 0) + 1);
    charMap.set(s2[i], (charMap.get(s2[i]) || 0) - 1);
  }

  return [...charMap.values()].every((v) => v === 0);
};

var checkInclusion1 = function (s1, s2) {
  let l = 0;
  let k = s1.length;
  let r = l + k - 1;
  while (r < s2.length) {
    let substr = s2.slice(l, r + 1);
    if (checkAnagram(s1, substr)) {
      return true;
    } else {
      l++;
      r = l + k - 1;
    }
  }
  return false;
};

console.log(checkInclusion1("adc", "dcda"));

// Time Complexity: O(n), Space Complexity: O(n+m)

var checkInclusion2 = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++;
    s2Count[s2.charCodeAt(i) - 97]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) {
      matches++;
    }
  }

  let l = 0;
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) {
      return true;
    }
    let index = s2.charCodeAt(r) - 97;
    s2Count[index]++;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      matches--;
    }

    index = s2.charCodeAt(l) - 97;
    s2Count[index]--;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] - 1 === s2Count[index]) {
      matches--;
    }
    l++;
  }
  return matches === 26;
};

console.log(checkInclusion2("adc", "dcda"));
