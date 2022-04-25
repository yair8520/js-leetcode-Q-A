/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let res = [];
  for (let num = left; num <= right; num++) {
    if (num < 10) {
      res.push(num); 
      continue;
    }
    if (checkDiv(Array.from(String(num), Number), num)) {
      res.push(num);
    }
  }
  return res;
};
const checkDiv = (arr, num) => {
  
  for (let j = 0; j < arr.length; j++) {
    if (num % arr[j] !== 0) {
      return false;
    }
  }
  return true;
};
console.log(selfDividingNumbers(1, 22));
