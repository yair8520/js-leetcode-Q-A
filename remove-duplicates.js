/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n <= 1) return n;

  let i = 1;

  // j עובר על המערך מהאיבר השני
  for (let j = 1; j < n; j++) {
    // אם הערך שונה מהאחרון הייחודי שנכתב - כותבים אותו
    if (nums[i - 1] !== nums[j]) {
      nums[i] = nums[j];
      i++;
      console.log(nums);
    }
  }

  return i;
};

// בדיקות
let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1), nums1); // 2, [1,2,...]
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2), nums2); // 5, [0,1,2,3,4,...]
