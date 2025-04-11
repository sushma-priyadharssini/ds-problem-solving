function maximumDifference(nums) {
    let maxDiff=nums[1]-arr[0]
    let minEl=nums[0]

    for(let i=0;i<nums.length;i++) {
        if(arr[i]-minEl > maxDiff) {
            maxDiff=arr[i]-minEl
        }
        if(arr[i]<minEl) minEl=arr[i]
    }
    return maxDiff
}

console.log(maximumDifference([ 1, 2, 90, 10, 110 ]))
