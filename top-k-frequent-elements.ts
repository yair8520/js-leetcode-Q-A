function topFrequent(nums, k) {
  let map = {};

  nums.forEach((e) => {
    if (map[e]) {
      map[e] = map[e] + 1;
    } else {
      map[e] = 1;
    }
  });
  const sortedChars = Object.keys(map).sort((a, b) => map[b] - map[a]);
  return [String(sortedChars[0]), String(sortedChars[1])];
}
console.log(topFrequent([1, 1, 1, 2, 2, 3], 2));
