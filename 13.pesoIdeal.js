// calcular o peso ideal de uma pessoa com base em seu sexo e altura
// homens 22 * altura2
// mulheres 21 * altura2

const pesoIdeal = (sexo, altura) => {
  const homem = 'homem';
  const mulher = 'mulher';
  if (sexo === homem) {
    return (peso = (22 * Math.pow(altura, 2)).toFixed(2) + ' kilos');
  } else if (sexo === mulher) {
    return (peso = (21 * Math.pow(altura, 2)).toFixed(2) + ' kilos');
  } else {
    return 'you miss some character?'
  }
};

console.log(pesoIdeal('homem', 1.95));
