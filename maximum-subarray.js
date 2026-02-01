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
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
