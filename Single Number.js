/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber3 = function (nums) {
  let res = [];
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != -Infinity) {
      if (nums[i] === nums[i + 1]) {
        nums[i] = -Infinity;
        nums[i + 1] = -Infinity;
      } else if (nums[i] !== nums[i + 1]) {
        res.push(nums[i]);
        nums[i] = -Infinity;
      }
    }
  }
  return res;
};
