/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0; // Pointer starting from the beginning of the array
    let right = numbers.length - 1; // Pointer starting from the end of the array

    while (left < right) { // Continue until the two pointers meet
        const sum = numbers[left] + numbers[right]; // Calculate the sum of the two numbers

        if (sum === target) {
            return [left + 1, right + 1]; // Return the indices (1-indexed)
        } else if (sum < target) {
            left++; // Move the left pointer to the right to increase the sum
        } else {
            right--; // Move the right pointer to the left to decrease the sum
        }
    }

    return []; // Return an empty array if no solution found (shouldn't happen as per problem statement)
};

// Example usage:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [1, 2]

const nums2 = [3, 3, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 3]

const nums3 = [-1, 0];
const target3 = -1;
console.log(twoSum(nums3, target3)); // Output: [1, 2]
