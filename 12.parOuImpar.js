// function parOuImpar(number) {
//   if (number % 2 === 0) {
//     console.log(`${number} é par`);
//   } else {
//     console.log(`${number} é impar`);
//   }
//   return number;
// }

// parOuImpar(4)

// let number = 3;

// number % 2 === 0 ? console.log(`${number} é par`) : console.log(`${number} é impar`);

const parOuImpar = (number) => (number % 2 === 0) ? `${number} é par` : `${number} é impar`;
console.log(parOuImpar(34*2));