function solveMeFirst(a, b) {
  return a + b;
}

console.log(solveMeFirst(7, 3));

function showClosestNumber(number, array) {
  let numeroMaisProximo = array[0]; // no caso numero 2
  let diferencaDoMaisProximo = Math.abs(number - numeroMaisProximo); // 6

  array.forEach((a) => {
    let resultadoSubtracao = Math.abs( number - a); // 1 ; 4 ; 2 ; 6

    if(resultadoSubtracao < diferencaDoMaisProximo){
      numeroMaisProximo = a // 7 ; 4 ; 6
      diferencaDoMaisProximo = resultadoSubtracao //1 ; 4 ; 2
    }
  })

  return numeroMaisProximo;
}

console.log(showClosestNumber(8, [7, 4, 6, 2, 10, 9]));
