function fizzBuzz(n) {
  const fizzBuzz = (n) =>
    [...Array(n)].map((_, i) =>
      ++i % 15 == 0
        ? "FizzBuzz"
        : i % 5 == 0
        ? "Buzz"
        : i % 3 == 0
        ? "Fizz"
        : i + ""
    );
  console.log(n);
}
console.log(fizzBuzz(15));
