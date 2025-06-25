var lengthOfLongestSubstring = function (s) {
  let currStr = "";
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    const pos = currStr.indexOf(currChar);
    if (pos !== -1) {
      currStr = currStr.substr(pos + 1);
    }
    currStr += currChar;
    max = Math.max(max, currStr.length);
  }
  return max;
};

// Sliding window technique
var lengthOfLongestSubstring2 = function (s) {
  let maxLength = 0;
  let window = new Set();
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    while (window.has(s[r])) {
      window.delete(s[l]);
      l++;
    }
    maxLength = Math.max(maxLength, r - l + 1);
    window.add(s[r]);
  }
  return maxLength;
};

lengthOfLongestSubstring("abcbb");
