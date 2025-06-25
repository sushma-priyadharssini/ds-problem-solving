/* 
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 */
var decodeString = function (s) {
  const stringStack = [];
  const countStack = [];
  let cur = "";
  let k = 0;

  for (const c of s) {
    if (!isNaN(c)) {
      k = k * 10 + parseInt(c, 10);
    } else if (c === "[") {
      stringStack.push(cur);
      countStack.push(k);
      cur = "";
      k = 0;
    } else if (c === "]") {
      const temp = cur;
      cur = stringStack.pop();
      const count = countStack.pop();
      cur += temp.repeat(count);
    } else {
      cur += c;
    }
  }

  return cur;
};


// Time complexity: O(n+N2)

function decodeString(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char !== "]") {
      stack.push(char);
    } else {
      let substr = "";
      while (stack[stack.length - 1] !== "[") {
        substr = stack.pop() + substr;
      }
      stack.pop();

      let k = "";
      while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }
      stack.push(substr.repeat(parseInt(k, 10)));
    }
  }

  return stack.join("");
}
