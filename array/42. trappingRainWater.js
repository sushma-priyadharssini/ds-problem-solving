/* 
Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9 */

var trap = function(height) {
    let left=0;
    let right=height.length -1
    let leftMax=0;
    let rightMax=0
    let res=0
    
    while(left<right) {
        if(height[left]<height[right]) {
            if(height[left]>=leftMax) {
                leftMax = height[left]
            } else {
                res=res+leftMax-height[left]
            }
            left++
        } else {
            if(height[right]>=rightMax) {
                rightMax = height[right]
            } else {
                res=res+rightMax-height[right]
            }
            right--
        }
    }
    
    return res
};

var trap1 = function(height) {
    let leftMax = -1, 
        rightMax = -1, 
        left = 0, 
        right = height.length - 1, 
        water = 0;
    while (left <= right) {
        //Get the max wall height from both the ends
        leftMax = Math.max(height[left], leftMax);
        rightMax = Math.max(height[right], rightMax);
        
        //calculate the amount of water trapped
        if (leftMax > rightMax) {
            water += rightMax - height[right]
            right--
        }
        else {
            water += leftMax - height[left]
            left++
        }
    }
  
    return water
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
