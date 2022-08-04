function catAndMouse(x, y, z) {
  let catA = x;
  let catB = y;
  let mouseC = z;

  if (Math.abs(mouseC - catA) < Math.abs(mouseC - catB)) {
    return 'cat A';
  } else if (Math.abs(mouseC - catA) === Math.abs(mouseC - catB)) {
    return 'Mouse C';
  } else {
    return 'cat B';
  }
}

console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(2, 2, 2));
