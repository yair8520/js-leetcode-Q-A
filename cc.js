function checkCoordinate(A) {
  const Graph = {
    a: [],
    b: [],
    c: [],
    d: [],
  };
  //Divide the points into quarters
  for (let i = 0; i < A.length; i++) {
    if (A[i].x < 0 && A[i].y < 0) {
      Graph.c.push(A[i]);
    }
    if (A[i].x > 0 && A[i].y > 0) {
      Graph.b.push(A[i]);
    }
    if (A[i].x > 0 && A[i].y < 0) {
      Graph.d.push(A[i]);
    }
    if (A[i].x < 0 && A[i].y > 0) {
      Graph.a.push(A[i]);
    }
  }

  for (q in Graph) {
    for (j in q) {
      let line = findSlopeOfLine(j.x, j.y, 0, 0);
      for (i in j) {
        //for each coordinate will check if the on the same line from [0,0] to "j"
      }
    }
  }
  console.log(Graph);
}
const pointIsOnTheSameLine = (m, c, x, y) => {
  if (y == m * x + c) return true;

  return false;
};
const findSlopeOfLine = (x1, y1, x2, y2) => {
  return (y2 - y1) / (x2 - x1);
};
checkCoordinate([
  { x: -1, y: -2 },
  { x: 1, y: 2 },
  { x: 2, y: 4 },
]);
