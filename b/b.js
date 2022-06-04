function solution(a, b, queries) {
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    if (queries[i].length == 3) {
      let idx = queries[i][1];
      b[idx] = queries[i][2];
    } else {
      let sum = queries[i][1];
      res.push(findPairs([...a, ...b], sum));
    }
  }
  return res;
}
let findPairs = (nums, sum) => {
  let map = new Map();
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(sum - nums[i])) {
      counter++;
    } else {
      map.set(nums[i], i);
    }
  }
  return counter;
};

console.log(
  solution(
    [1, 2, 2],
    [2, 3],
    [
      [1, 4],
      [0, 0, 3],
      [1, 5],
    ]
  )
);
