// class Solution {
//   constructor(nums) {
//     this.nums = nums;
//     this.map = this.createMap(); // O(n)
//   }
//   createMap() {
//     const map = new Map();
//     this.nums.forEach((num, idx) => {
//       const numIdxs = map.has(num) ? map.get(num) : [];
//       numIdxs.push(idx);
//       map.set(num, numIdxs);
//     });
//     return map;
//   }
//   pick(target) {
//     const targetIdxOptions = this.map.get(target);
//     const randomIdx = Math.floor(Math.random() * targetIdxOptions.length);
//     return targetIdxOptions[randomIdx];
//   }
// }
// /**
//  * Your Solution object will be instantiated and called as such:
//  * var obj = new Solution(nums)
//  * var param_1 = obj.pick(target)
//  */
// let a = new Solution([1, 2, 3, 3, 3]);
// console.log(a.map);
// console.log(a.pick(1));
document.write("fg")
