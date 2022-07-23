function simpleArraySum(ar) {
  let total = 0;
  ar.forEach((a) => (total += a));
  return total;
}

// function simpleArraySum(ar) {
//   let total = 0;

//   for (let index = 0; index < ar.length; index += 1) {
//     total = total + ar[index]
//   }

//   return total;
// }

// simpleArraySum([1, 2, 3])
console.log( simpleArraySum([1, 2, 3]));
