// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(message, K) {
  if (K >= message.length) return message;
  if (message[K] == " ") return message.slice(0, K);

  for (let i = K; i >= 0; i--) {
    if (message[i] == " ") return message.slice(0, i);
  }
}
console.log(solution("To crop or not to crop", 21));
