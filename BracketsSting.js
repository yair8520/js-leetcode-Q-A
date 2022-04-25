function solution(S) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < S.length; i++) {
    let c = S[i];
    if (map[c]) {
      console.log(i, map[c]);
      stack.push(map[c]);
      console.log(stack);
    } else if (c !== stack.pop()) {
      return 0;
    }
  }

  return !stack.length ? 1 : 0;
}
console.log(solution("{[(){()}]}"));
