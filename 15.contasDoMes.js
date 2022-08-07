let salario = 6000;
// let agua = 30;
// let luz = 150;
// let internet = 110;

let gastos = {
  Água: 30,
  luz: 150,
  internet: 110,
  Formosa: 300,
};

// let totalGastos = gastos.Água + gastos.luz + gastos.internet;
let totalGastos = Object.values(gastos).reduce(
  (acc, gasto) => (acc + gasto),
  0
);

let sobrou = salario - totalGastos;

console.log(
  `O seu salário é de R$${salario}  , a dispesa do mês foi de R$${totalGastos} , então sobrou do seu salário o valor de R$${sobrou} `
);
