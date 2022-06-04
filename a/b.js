function solution(N, S) {
  let rowsSeatCounter = new Array(N).fill(2);
  let splitSeatOrdered = S.split(" ");

  if (splitSeatOrdered != null) {
    for (let i = 0; i < splitSeatOrdered.length; i++) {
      let seatReservation = splitSeatOrdered[i];
      let row = seatReservation.charAt(0) - 1;
      let col = seatReservation.charAt(1);
      if (col == "C" || col == "E" || col == "F" || col == "H") {
        if (rowsSeatCounter[row]) rowsSeatCounter[row] -= 1;
      }
    }
  }

  return rowsSeatCounter.reduce((sum, seat) => {
    return seat > 0 ? sum + seat : sum;
  }, 0);
}
console.log(solution(3, ""));
