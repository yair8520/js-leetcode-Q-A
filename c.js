// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  let sent;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "?") sent = S.slice(0, i);
  }
  console.log(sent)
}
console.log(solution("We test coders. Give us a try?"));
