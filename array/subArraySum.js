/* Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
Output: Sum found between indexes 2 and 4
Explanation: Sum of elements between indices
2 and 4 is 20 + 3 + 10 = 33

Input: arr[] = {10, 2, -2, -20, 10}, sum = -10
Output: Sum found between indexes 0 to 3
Explanation: Sum of elements between indices
0 and 3 is 10 + 2 - 2 - 20 = -10

Input: arr[] = {-10, 0, 2, -2, -20, 10}, sum = 20
Output: No subarray with given sum exists
Explanation: There is no subarray with the given sum */

function subArraySum(arr, n, sum) {
    //cur_sum to keep track of cumulative sum till that point
    let cur_sum = 0;
    let start = 0;
    let end = -1;
    let hashMap = new Map();

    for (let i = 0; i < n; i++) {
        cur_sum = cur_sum + arr[i];
        //check whether cur_sum - sum = 0, if 0 it means
        //the sub array is starting from index 0- so stop
        if (cur_sum - sum == 0) {
            start = 0;
            end = i;
            break;
        }
        //if hashMap already has the value, means we already
        // have subarray with the sum - so stop
        if (hashMap.has(cur_sum - sum)) {
            start = hashMap.get(cur_sum - sum) + 1;
            end = i;
            break;
        }
        //if value is not present then add to hashmap
        hashMap.set(cur_sum, i);

    }
    // if end is -1 : means we have reached end without the sum
    if (end == -1) {
        document.write("No subarray with given sum exists");
    }
    else {
        document.write("Sum found between indexes "
                        + start + " to " + end);
    }
}