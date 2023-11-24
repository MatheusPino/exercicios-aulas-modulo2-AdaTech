// 1)Escreva um programa em JavaScript que imprima todos os números pares de 1 a 20.
let pares = [];

for (let i = 1; i<=20; i++){
  if ((i%2) == 0) {
    pares.push(i);
  }
}

console.log(pares);