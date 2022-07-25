function staircase(n) {
  // Write your code here
  let character = '#';
  let emptySpace = '';
  let inputPosition = n - 1;

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
      if (columnIndex < inputPosition) {
        emptySpace += ' ';
      } else {
        emptySpace += character;
      }
    }
      console.log(emptySpace);
      emptySpace = '';
      inputPosition -= 1;
  }

}

staircase(6);
