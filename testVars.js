let print = (a, b) => {
  console.log(a + b);
};
let calc = (a, b, op) => {
    op(a, b);
};
console.log(calc(2, 3, print));
