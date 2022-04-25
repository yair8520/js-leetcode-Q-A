/**
 * @param {number[]} score
 * @return {string[]}
 */
var arr = ["Gold Medal", "Silver Medal", "Bronze Medal"];
var findRelativeRanks = function (score) {
  let mapa = new Map();
  let res = [];
  let answer = [...score].sort((a, b) => b - a);
  for (let i = 0; i < score.length; i++) {
    mapa.set(score[i], i);
  }
  
  for (let i = 0; i < answer.length; i++) {
    let cell = mapa.get(answer[i]);
    if (i <= 2) {
      res[cell] = arr[i];
    } else {
      res[cell] = (i + 1).toString();
    }
  }
  return res;
};
console.log(findRelativeRanks([5, 4, 3, 2, 1]));
