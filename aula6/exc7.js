//7) Dado um array de arrays, encontrar a soma de todos os números contidos nos arrays internos.

const infoArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function somarNumerosArray (array) {
  let soma = 0;
  for (let num of array){
    soma = soma + num;
  }
  return soma;
}

let somaTotal = 0;

for (let array of infoArray){
  let somaInterna = somarNumerosArray(array);
  somaTotal = somaTotal + somaInterna;
}

console.log(somaTotal);