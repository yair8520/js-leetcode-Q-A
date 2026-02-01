/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const map = new Map();

  const fib = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;

    if (map.has(n)) {
      return map.get(n);
    }

    const res = fib(n - 1) + fib(n - 2);
    map.set(n, res);
    return res;
  };

  return fib(n);
};

console.log(climbStairs(3)); // 3
