// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
  const acc: { [key: string]: number } = {};

  for (let i = 0; i < A.length; i++) {
    if (acc[A[i]] !== undefined) {
      delete acc[A[i]];
    } else {
      acc[A[i]] = i;
    }
  }
  const values: number[] = Object.values(acc);
  if (values.length === 0) return -1;

  const minIndex = Math.min(...values);
  return A?.[minIndex] ?? -1;
}

const arr = [4, 10, 5, 4, 2, 10]; //5
console.log(solution(arr));
