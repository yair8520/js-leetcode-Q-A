
var search = function(rotatedSortedArray, targetValue) {
  // Initialize two pointers for the binary search
  let leftPointer = 0; // Left pointer
  let rightPointer = rotatedSortedArray.length - 1; // Right pointer

  // Continue the search while the left pointer is less than or equal to the right pointer
  while (leftPointer <= rightPointer) {
      // Calculate the middle index
      let middleIndex = Math.floor(leftPointer + (rightPointer - leftPointer) / 2);

      // Check if the middle element is the target
      if (rotatedSortedArray[middleIndex] === targetValue) return middleIndex; // If found, return the index

      // Determine which half of the array is sorted
      if (rotatedSortedArray[leftPointer] <= rotatedSortedArray[middleIndex]) {     // Left half is sorted
          // Check if the target is in the sorted left half
          if (rotatedSortedArray[leftPointer] <= targetValue && targetValue < rotatedSortedArray[middleIndex]) {
              rightPointer = middleIndex - 1; // Search in the left half
          } else {
              leftPointer = middleIndex + 1; // Search in the right half
          }
      } else { // Right half is sorted
          // Check if the target is in the sorted right half
          if (rotatedSortedArray[middleIndex] < targetValue && targetValue <= rotatedSortedArray[rightPointer]) {
              leftPointer = middleIndex + 1; // Search in the right half
          } else {
              rightPointer = middleIndex - 1; // Search in the left half
          }
      }
  }
  return -1; // Return -1 if the target is not found
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
