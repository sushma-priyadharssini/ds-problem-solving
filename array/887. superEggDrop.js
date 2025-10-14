
// dp approach - Time Complexity: O(k*n*logn), Auxiliary Space: O(n*k). 
var superEggDrop = function (k, n, memo = {}) {
    if (k === 1) return n;
    if (n === 0 || n === 1) return n;

    let key = k + ',' + n;
    if (key in memo) return memo[key];

    let low = 1, high = n, min = Number.MAX_VALUE;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let breaks = superEggDrop(k - 1, mid - 1, memo);
        let survives = superEggDrop(k, n - mid, memo);

        let worst = 1 + Math.max(breaks, survives);
        min = Math.min(min, worst);

        if (breaks > survives) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    memo[key] = min;
    return min;
}


// Recursive approach -  time complexity is exponential, Auxiliary Space :O(1).
let superEggDrop1 = function (k, n, memo = {}) {
    if (k === 1) return n
    if (n === 1 || n === 0) return n
    let key = k + ',' + n;
    if (key in memo) return memo[key];

    let min = Number.MAX_VALUE;
    let x, res;

    for (x = 1; x <= n; x++) {
        res = Math.max(superEggDrop1(k - 1, x - 1), superEggDrop1(k, n - x))
        if (res < min) min = res
    }
    return min + 1

}
console.log(superEggDrop(8, 10000))