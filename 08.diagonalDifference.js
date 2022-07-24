function diagonalDifference(arr) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  arr.forEach((a, index) => {
    primaryDiagonal += a[index];
    secondaryDiagonal += a[a.length - 1 - index];
  });

  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
