var maxSumTwoNoOverlap = function (A, K, L) {
  //(A,K,L)[0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2)

  for (let i = 1; i < A.length; i++) {
    A[i] = A[i - 1] + A[i];
  }
  console.log(A);
  // Assign initial values so we can skip 1st run in below for loop
  // Taking the default result to be the first L + M elements
  let res = A[L + K - 1];
  console.log("res", res);
  let maxK = A[K - 1];
  console.log("maxK", K, maxK);
  let maxL = A[L - 1];
  console.log("maxL", L, maxL);

  // Either L before M or M before L, start this loop at index L + M
  for (let i = L + K; i < A.length; i++) {
    maxK = Math.max(maxK, A[i - L] - A[i - K - L]);
    console.log("i",i)
    console.log(
      i - L,
      i - K - L,
      "loop-maxK",
      `${A[i - L]} - ${A[i - K - L]}`,
      "=",
      A[i - L] - A[i - K - L],
      " ",
      maxK
    );

    maxL = Math.max(maxL, A[i - K] - A[i - K - L]);
    console.log(
      i - K,
      i - K - L,
      "loop-maxL",
      `${A[i - K]} - ${A[i - K - L]}`,
      "=",
      A[i - K] - A[i - K - L],
      "",
      maxL
    );

    res = Math.max(
      res,
      Math.max(maxK + (A[i] - A[i - L]), maxL + (A[i] - A[i - K]))
    );
    console.log("loop-res", res);
  }
  return res ? res : -1;
};
maxSumTwoNoOverlap([8, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2);
//[8, 14, 19, 21, 23, 28, 29, 38, 42]
