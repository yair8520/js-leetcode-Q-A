function solution(S) {
    let stack={}
  let muscineWord = S.split("");
  let sum = 0;
  for (let i = 0; i < muscineWord.length; i++) {
    stack.push(muscineWord[i])
  }
  return sum;
}
console.log(solution("4 5 6 - 7 +"));
