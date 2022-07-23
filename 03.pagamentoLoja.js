// EXERCÍCIO 3
// =========================
// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00
// =========================

let precoProduto = 60;
let desconto = 10;
let parcelas = 3;
let pagAVista;
let cartao;

pagAVista = precoProduto - (precoProduto * (desconto / 100));
cartao = precoProduto / parcelas;

console.log(`Preço: R$${precoProduto.toFixed(2)} `);
console.log(`Á vista: R$${pagAVista.toFixed(2)} `);
console.log(`Ou ${parcelas}x de: R$${cartao.toFixed(2)} `);
