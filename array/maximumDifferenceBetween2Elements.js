function maximumDifference(nums) {
    let maxDiff = nums[1] - nums[0]
    let minEl = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - minEl > maxDiff) {
            maxDiff = nums[i] - minEl
        }
        if (nums[i] < minEl) minEl = nums[i]
    }
    return maxDiff
}

function maximumDifference1(nums) {
    let minEl = Infinity;
    let maxEl = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        minEl = Math.min(minEl, nums[i])
        maxEl = Math.max(maxEl, nums[i])

    }
    return maxEl - minEl
}

console.log(maximumDifference1([1, 2, 90, 10, 110]))
