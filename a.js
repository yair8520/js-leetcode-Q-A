function solution(A, K) {
  var n = A.length;
  for (var i = 0; i < n - 1; i++) {
    if (A[i] > K || A[i] < 1) return false;
  }
  if (A[0] != 1 || A[n - 1] != K) return false;
  else return true;
}
console.log(solution([1,1,2,3,3], 3));
//
const fnMap = {
    "+": (stack, i) => {
      return Number(stack.pop()) + Number(stack.pop());
    },
    "-": (stack, i) => {
      return Number(stack.pop()) - Number(stack.pop());
    },
    DUP: (sum, array, i) => {},
    POP: (sum, array, i) => {
      array.POP();
    },
  };
  function solution(S) {
    array = S.split("").filter(function (entry) {
      return /\S/.test(entry);
    });
    console.log(array);
    let stack = [];
    let resArr = [];
    let res = 0;
    for (let i = 0; i < array.length; i++) {
      if (!isNaN(array[i])) stack.push(array[i]);
      if (fnMap[array[i]]) {
        resArr.push(fnMap[array[i]](stack, i));
        console.log(stack);
        if (isNaN(res)) {
          return -1;
        }
        stack.splice(i, 0, res);
      }
    }
  
    return resArr.reduce((partialSum, a) => partialSum + a, 0);
  }
  console.log(solution("4 5 6 - 7 +"));
  