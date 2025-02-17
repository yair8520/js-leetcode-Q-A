
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
// Example usage:
const nums = [2,7,11,15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [2, 4] (indices for numbers 3 and 14)
