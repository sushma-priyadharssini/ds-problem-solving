function subString(str, n) {
    for (var i = 0; i < n; i++) {
        for (var j = i+1; j <= n; j++) {
            console.log(str.substring(i,j))
        }
    }
}

let str='abcd';
subString(str, str.length);


function subString1(str,n) {
    // Pick starting point
    for (let len = 1; len <= n; len++) {
        // Pick ending point
        for (let i = 0; i <= n - len; i++) {
            //  Print characters from current
            // starting point to current ending
            // point.
            let j = i + len - 1;
            for (let k = i; k <= j; k++) {
                console.log(str[k]);
            }
            console.log("<br>");
        }
    }
}
// Driver program to test above function
let str1=['a', 'b', 'c'];
subString1(str1, str1.length);
