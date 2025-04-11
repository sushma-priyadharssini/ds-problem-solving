/* 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [];
    var i=0, j=0;
    while(i < nums1.length &&  j < nums2.length) {
        if(nums1[i] > nums2[j]) {
            mergedArray.push(nums2[j])
            j++;
        } else if (nums2[j] > nums1[i]) {
            mergedArray.push(nums1[i])
            i++;
        } else if (nums2[j] === nums1[i]) {
            mergedArray.push(nums1[i])
            mergedArray.push(nums2[j])
            i++;
            j++;
        }
    }
    if (i === nums1.length) {
        mergedArray = mergedArray.concat(nums2.splice(j, nums2.length-j));
    }
    if (j === nums2.length) {
        mergedArray = mergedArray.concat(nums1.splice(i, nums1.length-i));
    }
    return mergedArray;
};

var findMedian = (arr) => {
    const m = Math.floor(arr.length/2);
    if (arr.length%2 !== 0) {
        return arr[m];
    }
    return (arr[m] + arr[m-1]) / 2;
}

console.log(findMedian(findMedianSortedArrays([1,2], [-1,3])));
