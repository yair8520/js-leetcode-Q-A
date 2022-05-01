/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = nums.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );
  console.log(map);
  let m2 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  return Array.from(m2.keys()).slice(0, k);
};
console.log(topKFrequent([1,1,1,2,2,3], k = 2));
