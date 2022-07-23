const valorJantar = 80;
const taxaGarcom = 10;
const totalAPagar = valorJantar + ((taxaGarcom / 100) * valorJantar);

console.log(`Valor do Jantar: R$${valorJantar},00 `)
console.log(`Taxa do Garçom: R$${(taxaGarcom / 100) * valorJantar},00`)
console.log('O Total Ficou: R$' + totalAPagar + ',00 Reais.');
