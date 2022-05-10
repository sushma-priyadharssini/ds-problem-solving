/* Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4]. */

// (Number(digits.join('')) + 1).toString().split('').map(Number) - Dont try this as Number would round off big numbers

var plusOne = function(digits) {
    var i = digits.length - 1;
    let val;
    let carry = 1;
    
    while(i >=0 && carry) {
        val = digits[i] + carry;
        carry = Math.floor(val/10);
        digits[i] = val%10;
        i--;
    }

    if(carry) digits.unshift(carry)
    return digits;
}