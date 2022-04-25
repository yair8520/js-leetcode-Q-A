const fnMap = {
  "+": (stack, i) => {
    return Number(stack.pop()) + Number(stack.pop());
  },
  "-": (stack, i) => {
    return Number(stack.pop()) - Number(stack.pop());
  },
  DUP: (stack, i) => {
    return stack[i - 1];
  },
  POP: (stack, i) => {
    stack.pop();
  },
};
function solution(S) {
  array = S.split(" ").filter(function (entry) {
    return /\S/.test(entry);
  });

  let stack = [];
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) stack.push(array[i]);
    if (array[i] == "POP") stack.pop();
    if (fnMap[array[i]]) {
      res = fnMap[array[i]](stack, i);
      if (isNaN(res)) {
        return -1;
      }
      stack.push(res);
    }
  }

  return stack.length === 0 ? -1 : stack.pop();
}
console.log(solution("3 DUP 5 - -"))
