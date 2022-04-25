/**
 * @param {number} n
 * @return {number}
 * Given n, calculate F(n).
 */
var fib = function (n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n];
};
////////////////////////////////////////////////////////////////
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let arr = [0, 1, 1]; //2,4,7,13....
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n];
};
////////////////////////////////////////////////////////////////

/**
 * @param {number} n
 * @return {number}
 */
const memo = {};
var fib = function (n) {
  if (memo[n]) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  const ans = fib(n - 1) + fib(n - 2);
  memo[n] = ans;
  return ans;
};
console.time()
console.log(fib(4));
console.timeEnd()
