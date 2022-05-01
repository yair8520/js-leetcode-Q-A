/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let res = [];
  let index = nums.length - 1;
  while (l <= r) {
    if (Math.pow(nums[l], 2) < Math.pow(nums[r], 2)) {
      res[index] = Math.pow(nums[r], 2);
      r--;
    } else {
      res[index] = Math.pow(nums[l], 2);
      l++;
    }

    index--;
  }
  return res;
};
console.log(sortedSquares([-4, -1, 3, 3, 10]));
