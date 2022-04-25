(function () {
  console.log(arguments[0]);
})("immediatly invoked func");

(function (text) {
  console.log(text);
})("immediatly invoked func2");

// x = 5
// let x;
// console.log(x)

const test = () => {
  var a = "var";
  let c = "let";
  {
    let b = "let";
    const d = "const ";
  }

  console.log(a, "\n", c);
  console.log(d);
  console.log(b);
};
//test();
