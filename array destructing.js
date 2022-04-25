const hero = {
  names: "Batman",
  realName: "Bruce Wayne",
  a: {
    b: "b",
    c: {
      d: "d",
    },
  },
};
const {
  names,
  a: {
    c: { d },
  },
} = hero;
console.log(d);

// console.log(test(names, realName, d));

// function test(x, y, z) {
//   return { x, y, z };
// }
var today = new Date();
var date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
console.log(date);
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time);
