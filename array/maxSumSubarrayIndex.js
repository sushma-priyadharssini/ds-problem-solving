let arr = [2, -4, 5, -6, -7, 8, 9, -1, 10];

const calculateMaxSum = (array) => {
    let maxSum = 0;
    let l = 0;
    let sum = 0;
    let maxSumIndex = [0, 0];

    for (let r = 0; r < array.length; r++) {
        sum += array[r];
        if (sum >= maxSum) {
            maxSum = sum;
            maxSumIndex = [l, r];
        } else {
            sum -= array[l];
            l++;
        }
    }
    return maxSumIndex;
};

console.log(calculateMaxSum(arr));
