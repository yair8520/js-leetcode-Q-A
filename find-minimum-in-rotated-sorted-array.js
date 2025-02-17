/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);

    if (nums[right] < nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[right];
};
console.log(findMin([3, 4, 5, 1, 2]));
