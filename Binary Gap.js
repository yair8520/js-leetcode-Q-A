/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const binary = n.toString(2);
  console.log(binary);
  let max = 0,
    last = 0,
    i = 0;
  while (i < binary.length) {
    if (binary[i] === "1") {
      let distance = i - last;
      last = i;
      max = Math.max(max, distance);
    }
    i++;
  }
  return max - 1 < 0 ? 0 : max - 1;
};
console.log(binaryGap(32));
