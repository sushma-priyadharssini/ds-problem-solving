var lengthOfLongestSubstring = function(s) {
    let currStr = '';
    let max = 0;

    for(let i=0; i<s.length; i++) {
        const currChar = s[i];
        const pos = currStr.indexOf(currChar);
        if(pos !== -1) {
            currStr = currStr.substr(pos+1);
        }
        currStr+=currChar;
        max = Math.max(max, currStr.length);
    }
    return max;
};

lengthOfLongestSubstring('abcbb');