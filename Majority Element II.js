/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = {}; // mapping of element to it's frequency
  let resualt = new Set();
  for (n of nums) {
    count[n] ? count[n]++ : (count[n] = 1);
    if (count[n] > Math.floor(nums.length / 3)) resualt.add(n);
  }

  return [...resualt];
};
console.log(majorityElement([2, 2]));
