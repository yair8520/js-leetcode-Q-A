function frequencySort(s) {
  let map = {};

  for (const i of s) {
    if (map[i]) {
      map[i] = map[i] + 1;
    } else {
      map[i] = 1;
    }
  }
  const sortedChars = Object.keys(map).sort((a, b) => map[b] - map[a]);

  let result = "";
  for (const char of sortedChars) {
    result += char.repeat(map[char]);
  }

  return result;
}

console.log(frequencySort("treeeeee"));
