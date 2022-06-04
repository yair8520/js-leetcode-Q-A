/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target1,target2) {
  return [nums.lastIndexOf(target1), nums.lastIndexOf(target2)];
};
console.log(searchRange("ass", "a","s"));


