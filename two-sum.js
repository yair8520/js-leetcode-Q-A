/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    if (map.has(target - curr)) {
      return [map.get(target - curr), i];
    } else {
      map.set(curr, i);
    }
  }
  console.log(map);
  return [];
};
// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); //  Because nums[0] + nums[1] == 9, we return [0, 1].
