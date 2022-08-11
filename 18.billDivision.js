function bonAppetit(bill, k, b) {
  // Write your code here

  let sum = 0;
  let final = 0;

  bill.forEach((conta) => (sum += conta));
  sum -= bill[k];
  final = sum / 2;

  final != b ? console.log(b - final) : console.log(`Bon Appetit`);

  // let sum = 0;
  // let final = 0;
  // bill.forEach((price) => (sum += price));
  // sum -= bill[k];
  // final = sum / 2;

  // if (final != b) {
  //   console.log(b - final);
  // } else {
  //   console.log(`Bon Appetit`);
  // }
}

bonAppetit([72, 54, 60, 14, 12, 30], 2, 228);
