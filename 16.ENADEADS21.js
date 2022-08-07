//  Forma junto com o professor
// let alturas = [1.80, 1.95, 1.73, 1.54, 1.70];
let alturas = [];

function criaPessoa(num) {
  for (let index = 0; index < num; index += 1) {
    alturas.push(Math.random() * (2.3 - 1.4) + 1.4).toFixed(2); //(+ 1.4) é altura minima que quero contar a partir dela
  }
}

criaPessoa(1000);

let maiorAltura = alturas.sort((a, b) => b - a)[0];
let menorAltura = alturas.sort()[0];
let soma = alturas.reduce((acc, altura) => (acc += altura));
let media = (soma / alturas.length).toFixed(2);
let menorMedia = 0;
alturas.forEach((altura) => {
  altura < media && (menorMedia += 1);
});
console.log(`
  Pesquisa obtenção de alturas:
  a maior altura: ${maiorAltura.toFixed(2)},
  a menor altura: ${menorAltura.toFixed(2)},
  média das aluras: ${media},
  pessoas com altura menor que a média: ${menorMedia}
`);

// Forma que eu fiz
// function coletaAltura(maiorAltura, menorAltura, pessoas) {
//   let mediaAltura = (maiorAltura + menorAltura) / 2;
//   return `
//   Pesquisa de obtenção de alturas:
//   a maior altura: ${maiorAltura},
//   a menor altura: ${menorAltura},
//   média das alturas: ${mediaAltura},
//   pessoas com altura menor que a média: ${(pessoas - mediaAltura).toFixed(0)},`;
// }

// console.log(coletaAltura(1.95, 1.55, 1000));
