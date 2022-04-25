/**
 * @param {number[]} nums
 * @return {number[][]}
 * 2^nums.length
 */
var subsets = function (nums) {
  let res = [[]];
  for (let i = 0; i < nums.length; ++i) {
    let length = res.length;
    for (let j = 0; j < length; ++j) {
      res.push([...res[j], nums[i]]);
    }
  }
  return res;
};
console.log(subsets([1, 2, 3]));

// 0 (Empty)             :         []
// 1 (Adding 1 to it)    :         [] [1]
// 2 (Adding 2 to it)    :         [] [1] [2] [1,2]
// 3 (Adding 3 to it)    :         [] [1] [2] [1,2] [3] [1,3] [2,3] [1,2,3]
