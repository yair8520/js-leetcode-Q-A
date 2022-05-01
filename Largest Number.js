/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
  if (!nums || nums.length === 0) {
    return "0";
  }

  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  if (nums[0] === 0) {
    return "0";
  }
  return nums.join("");
};
console.log(largestNumber([10, 2])); //"3432 33432"
//console.log(34 % 10);                   //"3432 34323"//exp
