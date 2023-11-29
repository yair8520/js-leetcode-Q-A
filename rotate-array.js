//189. Rotate Array


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var modifyInPlace = function (nums, k) {
    const n = nums.length;
    k = k % n; // Handle the case where k is greater than the length of the array

    // Reverse the entire array
    reverseArray(nums, 0, n - 1);
    // Reverse the first k elements
    reverseArray(nums, 0, k - 1);
    // Reverse the remaining elements
    reverseArray(nums, k, n - 1);
};

function reverseArray(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;

        start++;
        end--;
    }
}

let nums = [1, 2, 3, 4, 5, 6, 7];
modifyInPlace(nums, 3);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]
