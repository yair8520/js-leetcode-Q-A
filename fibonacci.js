// const fib = (n) => {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// };
// console.log(fib(7));
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34;

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(add(1)(2)(3)); 
// const step1 = add(1); 
// const step2 = step1(2); 
// const result = step2(3); 

// console.log(result); 

const person = {
  name: 'Alice',
  greet: function(greeting) {
      console.log(`${greeting}, my name is ${this.name}.`);
  }
};

const greetAlice = person.greet.bind(person);
greetAlice('Hello'); // Output: "Hello, my name is Alice."



function greet(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person2 = { name: 'Alice' };

// Call the greet function with 'person' as the context
greet.apply(person2, ['Hello', '!']); // Output: "Hello, my name is Alice!"
