// Solution 1:
function isPalindrome(str) {
    const revStr = str.split('').reverse().join('');
    return revStr === str;
}

function longestPalindrome1(str) {
    var max_length = 0,
    maxp = '';
    
    for(var i=0; i < str.length; i++) {
        var subs = str.substr(i, str.length);
        
        for(var j=subs.length; j>=0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
            continue;
        
            if (isPalindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }
    return maxp;
}

// Solution 2:
function longestPalindrome(str){
    var length = str.length;
    var result = "";

    var centeredPalindrome = (left, right) => {
        while (left >= 0 && right < length && str[left] === str[right]) {
            //expand in each direction.
            left--;
            right++;
        }
    
        return str.slice(left + 1, right);
    };

    for (var i = 0; i < length - 1; i++) {
        var oddPal = centeredPalindrome(i, i + 1);
        var evenPal = centeredPalindrome(i, i);

        if (oddPal.length > result.length)
        result = oddPal;
        if (evenPal.length > result.length)
        result = evenPal;
    }
    return result === '' ? str[0] : result;
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome1('babad'));