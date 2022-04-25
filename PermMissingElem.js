//1+2+...+n = n(n+1)/2

function solution(A) {
  const naturalSum = ((A.length + 2) * (A.length + 1)) / 2;
  const realSum = A.reduce((prev, next) => prev + next, 0);

  return naturalSum - realSum;
}
console.log(solution([2, 3, 1, 4 ,5]));
