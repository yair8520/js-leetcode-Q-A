/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = {}; // mapping of element to it's frequency
  for (n of nums) {
    count[n] ? count[n]++ : (count[n] = 1);
    if (count[n] > nums.length / 2) return n;
  }

  return -1;
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
