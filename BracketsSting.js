/**
 * @param {string} s
 * @return {boolean}
 */
var verify = function (s) {
  const stack = [];

  for (const c of s) {
    switch (c) {
      case "(":
        stack.unshift(")");
        break;
      case "[":
        stack.unshift("]");
        break;
      case "<":
        stack.unshift(">");
        break;
      case stack[0]:
        stack.shift();
        break;
      case ")" || "]" || ">":
        return false;
    }
  }

  return true;
};
//-----------------------------------------------------------------
function verify2(text) {
  const stack = [];
  for (const c of text) {
    if (c === "(") stack.unshift(")");
    else if (c === "[") stack.unshift("]");
    else if (c === "<") stack.unshift(">");
    else if (c === stack[0]) stack.shift();
    else if (c === ")" || c === "]" || c === ">") return false;
  }
  return true;
}

const test_inputs = [
  "---(++++)----",
  "",
  "before ( middle []) after ",
  ") (",
  "<( >)",
  "( [ <> () ] <> )",
  " ( [)",
  "(]",
];
for (const s of test_inputs) {
  console.log(verify(s), s);
}
