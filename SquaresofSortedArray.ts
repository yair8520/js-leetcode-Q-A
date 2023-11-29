// 977. Squares of a Sorted Array

function sortedSquares(nums) {
  let i = 0;
  let j = nums.length - 1;
  let result = [];

  while (i <= j) {
    const leftSquare = nums[i] ** 2;
    const rightSquare = nums[j] ** 2;

    if (leftSquare >= rightSquare) {
      result.unshift(leftSquare);
      i++;
    } else {
      result.unshift(rightSquare);
      j--;
    }
  }

  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
