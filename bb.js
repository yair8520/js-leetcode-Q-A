var maxSumTwoNoOverlap = function (A, K, L) {
  //(A,K,L)
  // Construct prefix sum
  // This array contains sum of all contiguous elements
  for (let i = 1; i < A.length; i++) {
    A[i] = A[i - 1] + A[i];
  }

  // Assign initial values so we can skip 1st run in below for loop
  // Taking the default result to be the first L + M elements
  let res = A[L + K - 1];
  let maxK = A[K - 1];
  let maxL = A[L - 1];

  // Either L before M or M before L, start this loop at index L + M
  for (let i = K + L; i < A.length; i++) {
    // Keep track maxK so far
    // L before M: A[i - M] - A[i - M - L] is sum of L-length sub array
    maxK = Math.max(maxK, A[i - L] - A[i - K - L]);

    // Keep track maxL so far
    // M before L: A[i - L] - A[i - L - M] is sum of M-length sub array
    maxL = Math.max(maxL, A[i - K] - A[i - K - L]);

    // Keep track res so far
    // maxK + (A[i] - A[i - M]): Sum of max L-length sub array and current M-length sub array
    // maxL + (A[i] - A[i - L]): Sum of max M-length sub array and current L-length sub array
    res = Math.max(
      res,
      Math.max(maxK + (A[i] - A[i - L]), maxL + (A[i] - A[i - K]))
    );
  }
  return res ? res : -1;
};
console.log(maxSumTwoNoOverlap([6,1,4,6,3,2,7,4], 3, 2));
