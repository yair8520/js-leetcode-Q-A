function isPalindrome(str) {
  str = str.replace(/\W/g, "").toLowerCase(); //remove all that not numbers/letters
  console.log(str);
  console.log(str.split(""));
  console.log(str.split("").reverse());
  console.log(str.split("").reverse().join(""));

  return str == str.split("").reverse().join("");
}
//console.log(isPalindrome("abcba"));                   // logs 'true'
// console.log(isPalindrome("levels"));                  // logs 'false'
// console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'

function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function (y) {
      return x + y;
    };
  }
}

// console.log(sum(2, 3)); // Outputs 5
// console.log(sum(2)(3));

// console.log(false === "0");
// console.log(typeof (false))
// console.log(typeof ("0"))
// console.log(typeof(0))
// console.log("0" === 0);
var hero = {
  name: "John Doe",
  getSecretIdentity: function () {
    return this.name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
//Bind creates a new function that will force the this inside the function to be the parameter passed to bind()

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() { console.log(i); }, i * 1000 );
// }

var myArray = ["a", "b", "c", "d"];

//console.log(['start', ...myArray[2], 'end'])

// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     {let outerVar = 'a';}

//     (function innerFunc(innerArg) {
//     var innerVar = 'b';

//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);

//     })(456);
// })(123);


let nums=[1,1,1,1]
 
var a = nums
nums.push(2)
console.log(a)
console.log(nums)