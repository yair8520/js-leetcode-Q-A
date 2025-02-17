/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currMax = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
       currMax = Math.max(nums[i], nums[i] + currMax);
      max = Math.max(currMax, max);
    }
    return max;
  };
  console.log(maxSubArray([5,-84,-1,-1,50,2]));
  