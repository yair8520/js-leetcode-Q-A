/**
 * @param {number[]} nums
 * @return {number}
 * 1+2+...+n = n(n+1)/2
 */
var missingNumber2 = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums[0] !== 0) return 0;
  if (nums[nums.length - 1] !== nums.length) return nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1) return nums[i + 1] - 1;
  }
};
var missingNumber = function (nums) {
  const naturalSum = ((nums.length + 1) * nums.length) / 2;
  const realSum = nums.reduce((prev, next) => prev + next, 0);

  return naturalSum - realSum;
};
console.log(missingNumber([0, 1]));
