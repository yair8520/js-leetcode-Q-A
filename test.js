function sum() {
  let res = [...arguments].reduce((acc, i) => acc + i, 0);

  let newSum = sum.bind(this, res);
  newSum.res = res;
  return newSum;
}
console.log(sum(1, 2)(1)(8).res);
