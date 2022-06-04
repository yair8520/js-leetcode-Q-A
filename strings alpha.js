const arr = ["a", "c", "t", "s", "g", "f"];
const sorted = arr.sort((a, b) => a.localeCompare(b));
console.log(sorted);


const arr1 = [
    '123asd',
    '19asd',
    '12345asd',
    'asd123',
    'asd12',
  ]
  const sorted1 = arr1.sort((a, b) => {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    })
  })
  console.log(sorted1)