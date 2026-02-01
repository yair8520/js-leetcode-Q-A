const fib = (n, map = new Map()) => {
  if (n <= 1) return n;

  if (map.has(n)) {
    return map.get(n);
  }

  const res = fib(n - 1, map) + fib(n - 2, map);
  map.set(n, res);
  return res;
};

console.log(fib(1500)); // 13
