//1) Escreva uma função que receba um vetor de números e retorne a soma de todos 
// os elementos.
let vetor1 = [1, 2, 3, 4, 5];
let vetor2 = [1, 1, 1, 1, 1];
let vetor3 = [0, 2, 0, 0, 5];

function somaElementos(vetor) {
  let soma = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma = soma + vetor[i];
  }
  return console.log(soma);
}

somaElementos(vetor1);
somaElementos(vetor2);
somaElementos(vetor3);

