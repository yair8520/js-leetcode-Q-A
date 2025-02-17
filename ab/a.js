const daysInMonths = {
  "01": 31,
  "02": 28,
  "03": 31,
  "04": 30,
  "05": 31,
  "06": 30,
  "07": 31,
  "08": 31,
  "09": 30,
  10: 31,
  11: 30,
  12: 31,
};
function containsWildcard(str) {
  return str.includes("?");
}
const isValidDate = (month, day) => {
  return day <= daysInMonths[month] && day > 0;
};
function solution(date) {
  let [month, day] = date.split("-");

    //all digits present
    if (!containsWildcard(month) && !containsWildcard(day)) {
        if (daysInMonths[month] == day) return `${month}-${day}`;
      }
  //??-DD
  if (month[0] === "?" && month[1] === "?") {
    for (const [key, value] of Object.entries(daysInMonths)) {
      if (value == day) return `${key}-${value}`;
    }
  }
  //?M-DD
  if (month[0] === "?" && month[1] !== "?") {
    console.log(Object.entries(daysInMonths))
    for (const [key, value] of Object.entries(daysInMonths)) {
      if (value == day) {
        if(month[1]==key[1])
        return `${key}-${value}`;
      }
    }
  }
  
  if (day[0] === "?" && day[1] === "?") {
    if (daysInMonths[month]) return `${month}-${daysInMonths[month]}`;
  }



  return "xx-xx";
}

// Example test cases
console.log(solution("?1-31")); // Expected output: "02-28"
// console.log(solution("??-28")); // Expected output: "12-28"
// console.log(solution("01-??")); // Expected output: "01-31"
// console.log(solution("??-4?")); // Expected output: "xx-xx"
// console.log(solution("09-31")); // Expected output: "xx-xx"
// console.log(solution("09-31")); // Expected output: "xx-xx"
