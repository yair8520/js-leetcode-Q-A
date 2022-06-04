// function solution(numbers) {
//   let res = 0;
//   let idxOfNonZero = findNonZero(numbers);
//   let target = 0;

//   while (idxOfNonZero > -1) {
//     target = numbers[idxOfNonZero];
//     for (let i = idxOfNonZero + 1; i < numbers.length; i++) {
//       if (numbers[i] >= target) {
//         numbers[i] = numbers[i] - target;
//       } else if (numbers[i] < target) {
//         res += target;
//         break;
//       }
//     }
//     idxOfNonZero = findNonZero(numbers);
//   }
  
//   return res;
// }
// let findNonZero = (numbers) => {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] != 0) return i;
//   }
//   return -1;
// };
// console.log(solution([3, 3, 5, 2, 3]));
console.log(new Date().toLocaleTimeString('il'));
