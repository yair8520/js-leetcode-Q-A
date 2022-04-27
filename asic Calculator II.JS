var calculate = function (s) {
  const calculator = s.match(/(\d+)|[+-/*]/g);
  const addition = [+calculator.shift()];

  const operator = {
    "+": (num) => addition.push(num),
    "-": (num) => addition.push(-num),
    "*": (num) => addition.push(addition.pop() * num),
    "/": (num) => addition.push((addition.pop() / num) | 0),
  };

  for (let i = 0; i < calculator.length; i++) {
    operator[calculator[i]]?.(+calculator[i + 1]);
  }

  return addition.reduce((result, num) => result + num);
};
console.log(calculate("3+2* 2"));
