/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDuplicates = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let position = Math.abs(nums[i]) - 1;
    if (nums[position] < 0) result.push(Math.abs(nums[i]));
    else nums[position] = -1 * nums[position];
  }

  return result;
};
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
