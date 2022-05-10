// Complexity - n*2
function subArraySum(arr, sum){
    let n= arr.length
    let currSum=0;
    for(let i=0; i<n;i++) {
        currSum=arr[i]
        for(let j=i+1; j<n; j++) {
            if(currSum===sum) return {i, j:j-1}
            if (currSum > sum || j === n)
                break;
            currSum = currSum + arr[j];
        }
    }
    return 'Not found'
}

// Time Complexity : O(n). 
function subArraySum1(arr, sum){
    let n= arr.length
    let currSum=arr[0];
    let start=0;
    for(let i=1; i<=n;i++) {
        while (currSum > sum && start < i - 1) {
            currSum = currSum - arr[start];
            start++
        }
        if(currSum===sum) return {start, end: i-1}
        if(i<n) currSum=currSum+arr[i]
    }
    return 'Not found'
}

let arr= [15, 2, 4, 8, 9, 5, 10, 23];
let sum = 23;
console.log(subArraySum1(arr, sum));