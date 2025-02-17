
// iam writing it in VSCode
function solution(A) {
    const arrayLength = A.length;
  let numOfRooms = 0;
  let i = 0;

  A.sort((a, b) => a - b);

  while (i < arrayLength) {
      const capacity = A[i];
      i += capacity;
      numOfRooms++;
  }
  return numOfRooms;
}
function solution2(A) {
    // iam writing it in VSCODE
    A.sort((a, b) => (a - b));

    const arrayLength = A.arrayLength;
    let numOfRooms = 0;
    let i = 0;
    
    while (i < arrayLength) {
        const capacity = A[i];
        i += capacity;
        numOfRooms++;
    }
    
    return numOfRooms;
}

// Example test cases
console.log(solution([1, 1, 1, 1, 1])); // Output: 5
console.log(solution([2, 1, 4])); // Output: 2
console.log(solution([2, 7, 2, 9, 8])); // Output: 2
console.log(solution([17, 3, 1, 1, 4, 5, 4, 91])); // Output: 4
console.log("solution2")
console.log(solution2([1, 1, 1, 1, 1])); // Output: 5
console.log(solution2([2, 1, 4])); // Output: 2
console.log(solution2([2, 7, 2, 9, 8])); // Output: 2
console.log(solution2([17, 3, 1, 1, 4, 5, 4, 91])); // Output: 4
