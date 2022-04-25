//pass by reference   array, functions, class instances are references
let x = [1];
let y = x;
y.push(2);
console.group("pass by reference");
console.log(x);
console.log(y);
console.groupEnd("pass by reference");

//pass by value   primitive types are passed around as values
let a = 1;
let b = a;
b = b + 2;
console.group("pass by value");
console.log(a); // 1
console.log(b); // 3
console.groupEnd("pass by value");

//Comparing values and comparing references
const one = 1;
const oneCopy = 1;
console.log(one === oneCopy); // true
console.log(one === 1); // true
console.log(one === one); // true

const ar1 = [1];
const ar2 = [1];
console.log(ar1 === ar2); // false
console.log(ar1 === [1]); // false
const ar11 = ar1;
console.log(ar1 === ar11); // true
console.log(ar1 === ar1); // true

let passByRreference = (nums) => {
  nums.push(5);
};
const num = [1, 2];
passByRreference(num);
console.log(num);
