//2) Escreva uma função que encontre o valor máximo em um vetor de números.
let vetor1 = [1, 2, 3, 4, 5];
let vetor2 = [1, 1, 1, 1, 1];
let vetor3 = [0, 2, 0, 0, 5];

function encontraMax(vetor) {
  const valorMax = Math.max(...vetor);
  console.log(valorMax);
}

encontraMax(vetor1);
encontraMax(vetor2);
encontraMax(vetor3);