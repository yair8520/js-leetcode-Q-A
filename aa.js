var numSteps = function (S) {
  const numArray = [...S];
  let steps = numArray[numArray.length - 1] == 0 ? -1 : 0;

  while (numArray.length >= 1) {
    if (numArray[0] === "0" && numArray.length === 1) return steps;
    if (numArray[numArray.length - 1] == "0") {
      numArray.pop();
      steps++;
    } else {
      numArray[numArray.length - 1] = "0";
      steps++;
    }
  }
  return steps;
};
console.log(numSteps("011100"));
console.log([" dsf"])