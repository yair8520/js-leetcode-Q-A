/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const lookup = new Map();
  const N = arr2.length;
  arr2.forEach((a, i) => {
    lookup.set(a, i);
  });
  console.log(lookup);

  return arr1.sort((a, b) => {
    a = lookup.has(a) ? lookup.get(a) : N + a;
    b = lookup.has(b) ? lookup.get(b) : N + b;
    return a - b;
  });
};
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
//[ 22, 28, 8, 6, 17, 44 ]
