function divideArray(nums) {
  const arrayLength = nums.length;
  if (arrayLength % 2 !== 0) return false;
  let map = {};

  nums.forEach((element) => {
    if (!map[element]) map[element] = 1;
    else {
      map[element] = map[element] + 1;
    }
  });
  for (const key in map) {
    if (map[key] % 2 !== 0) return false;
  }
  return true;
}
console.log(divideArray([3, 2, 3, 2, 2, 2]));
