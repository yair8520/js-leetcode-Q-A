var firstMissingPositive = function (nums) {
  // if input: [1,2,0]
  // eliminate the edge case
  if (nums.length < 1) {
    return 1;
  }

  // we can use hash/obj to sort the numbers array
  let myHash = {};

  // we will take off negative numbers when we create myHash
  for (let num of nums) {
    if (num > 0) myHash[num] = true;
  }

  // myHash = { '0': true, '1': true, '2': true }

  // 1 is first positive integer
  let missing = 1;

  for (missing; missing <= nums.length; missing++) {
    // if the [missing key] doesn't exit, then we return the number
    if (!myHash[missing]) {
      return missing;
    }

    // else we increment 1 then keep looping
  }

  // otherwise return 1
  return missing;
};
console.log(firstMissingPositive([3, 4, -1, 1]));
