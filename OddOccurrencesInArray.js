function solution(A) {
  let res = new Map();

  for (let i = 0; i < A.length; i++) {
    if (res.get(A[i])) {
      res.set(A[i], res.get(A[i]) + 1);
    } else {
      res.set(A[i], 1);
    }
  }
  console.log(res)
  return [...res].find(([key, value]) => value === 1)[0];
}

console.log(solution([9, 3, 9, 3, 9, 9, 7]));
// A[0] = 9  A[1] = 3  A[2] = 9
// A[3] = 3  A[4] = 9  A[5] = 7
// A[6] = 9
