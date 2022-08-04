function migratoryBirds(arr) {
  let counts = {};

  arr.forEach((coun) => (counts[coun] = (counts[coun] || 0) + 1));

  const maxValueOfObject = Math.max(...Object.values(counts));

  const findValue = Object.keys(counts).find(
    (key) => counts[key] === maxValueOfObject
  );

   return findValue;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
