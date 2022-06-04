function solution(A, D) {
  let map = new Map();
  let balance =A.reduce((sum, payment) => {return sum + payment;}, 0) - 5 * 12;

  for (let i = 0; i < D.length; i++) {
    let mounth = new Date(D[i]).getMonth() + 1;
    map.set(mounth, map.has(mounth) ? [...map.get(mounth), A[i]] : [A[i]]);
  }
  for (const [key, value] of map) {
    if (value.length < 3) break;
    if (value.reduce((a, b) => {return b < 0 ? a + b : 0;}, 0) <= -100 ) balance += 5;
  }
console.log(map)
  return balance;
}

console.log(
  solution(
    [1, -1, 0, -105, 1],
    ["2020-12-31", "2020-04-04", "2020-04-04", "2020-04-14", "2020-07-12"]
  )
);
