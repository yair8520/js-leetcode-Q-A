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
  test();
  