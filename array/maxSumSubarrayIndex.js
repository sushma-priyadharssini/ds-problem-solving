function maxSubarrayIndices(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;

    let start = 0;
    let tempStart = 0;
    let end = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum <= 0) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return { start, end, subarray: arr.slice(start, end + 1) };
}

// Example
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const arr = [-10, -9, -2, -1, 0];
const arr = [2, -4, 5, -6, -7, 8, 9, -1, 10];
console.log(maxSubarrayIndices(arr));

