/* 
Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 */

var canConstruct = function (ransomNote, magazine) {
    let magazineMap = new Map();

    for (let i = 0; i < magazine.length; i++) {
        magazineMap.set(magazine[i], (magazineMap.get(magazine[i]) || 0) + 1)
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const charCount = magazineMap.get(ransomNote[i]) || 0;
        if (charCount === 0) return false
        magazineMap.set(ransomNote[i], charCount - 1)
    }
    return true
};