function solution(A) {
  const sum = A.reduce((prev, next) => prev + next, 0); //13
  let max = 0;

  let indx;
  for (let p = 1; p < A.length; p++) {
    let con = Math.abs(sum - partSum(p, A)) * 2;
    if (max < con) {
      max = con;
      indx = p;
    }
  }
  return indx == undefined ? -1 : indx;
}
const partSum = (p, A) => {
  let sum = 0;
  for (let i = 0; i < p; i++) {
    sum += A[i];
  }
  return sum;
};
console.log(solution([-3,-1,2,4,3]));
// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
