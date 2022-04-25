/**
 * @param {number[]} A
 * @return {number}
 */
var firstMissingPositive = function (A) {
  let len = A.length;

  for (let i = 0; i < len; i++) {
    if (A[i] < 0) A[i] = 0;
  }
  
  for (let i = 0; i < len; i++) {
    let pos = Math.abs(A[i]) - 1;
    if (pos >= 0 && pos <= len) {
      if (A[pos] > 0) A[pos] = -A[pos];
      if (A[pos] === 0) A[pos] = -Infinity;
    }
  }
 

  for (let i = 0; i < len; i++) {
    if (A[i] >= 0) return i + 1;
  }

  return len + 1;
};
console.log(firstMissingPositive([3,4,-1,1]));
