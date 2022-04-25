function Myfunction(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

console.log(Myfunction(1)(2)(3));
//---------------------------------------------------------------------
function curry(f) {
  return (a) => {
    return (b) => {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

console.log(curry(sum)(1)(2)); // 3
///----------------------------------------------------------------------
function sum() {
  console.log(...arguments);
  let result = [...arguments].reduce((acc, num) => acc + num, 0);
  let newSum = sum.bind(this, result);
  newSum.result = result;

  return newSum;
}

console.log(sum(3, 4)(5)(9).result);
console.log(sum(3, 4)(5, 6)(9).result);
