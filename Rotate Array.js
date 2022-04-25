/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reversePartOfNums = (nums, lo, hi) => {
  while (lo < hi) {
    [nums[lo], nums[hi]] = [nums[hi], nums[lo]];
    lo++;
    hi--;
  }
};
var rotate = function (nums, k) {
  k = k % nums.length;
  nums.reverse(); //7,6,5,4,3,2,1
  reversePartOfNums(nums, 0, k - 1);
  reversePartOfNums(nums, k, nums.length - 1);
};
let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);

console.log(nums); //5,6,7,1,2,3,4
