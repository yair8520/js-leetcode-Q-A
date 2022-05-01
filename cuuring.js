function Myfunction(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

//console.log(Myfunction(1)(2)(3));
//---------------------------------------------------------------------
function curry(f) {
  return (a) => {
    return (b) => {
      return f(a, b);
    };
  };
}

function sum1(a, b) {
  return a + b;
}
let c = curry(sum1);

//console.log(c(1)(2)); // 3
///----------------------------------------------------------------------
function sum() {
  let result = [...arguments].reduce((acc, num) => acc + num, 0);
  let newSum = sum.bind(this, result);
  newSum.result = result;

  return newSum;
}

console.log(sum(3, 4)(5)(9));
console.log(sum(3, 4)(5, 6)(9).result);
//--------------------------------------------------------
let add = (x) => (y) => x + y;

function add2(x) {
  return function (y) {
    return x + y;
  };
}

var a = add(2)(3);
