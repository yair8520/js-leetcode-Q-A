let add = (x) => (y) => x + y;

function add2(x) {
  return function (y) {
    return x + y;
  };
}

var a = add(2)(3);
console.log(a);
