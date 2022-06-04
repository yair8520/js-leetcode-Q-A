function solution(initialHP, deltas) {
  let curHp = initialHP > 0 ? initialHP : 0;

  for (let i = 0; i < deltas.length; i++) {
    let check = deltas[i] + curHp;
    curHp = check < 0 ? 0 : check > 100 ? 100 : check;
  }
  return curHp;
}
console.log(solution(12, [88,1]));
