/*!----- Method 1 ----- */
var isAlphanumeric = function (char) {
  return /^[a-zA-Z0-9]$/.test(char);
};
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) left++;
    while (left < right && !isAlphanumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

isPalindrome("A man, a plan, a canal: Panama");

/*!----- Method 2 ----- */

var isValid = function (s, p) {
  const code = s.charCodeAt(p);
  return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
};
var isPalindrome2 = function (s) {
  let p1 = 0;
  let p2 = s.length - 1;
  s = s.toLowerCase();

  while (p1 < p2) {
    if (!isValid(s, p1)) {
      p1++;
      continue;
    }
    if (!isValid(s, p2)) {
      p2--;
      continue;
    }
    if (s[p1] === s[p2]) {
      p1++;
      p2--;
      continue;
    }
    if (s[p1] !== s[p2]) {
      return false;
    }
  }
  return true;
};

isPalindrome2("A man, a plan, a canal: Panama");
