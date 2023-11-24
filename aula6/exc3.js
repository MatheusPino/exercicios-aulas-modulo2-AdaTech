// 3)Escreva um programa que, dada uma string, conte o número de vogais nela.

let string = "O contador de vogais"
let contador = 0;
let vogais = ["a","e","i","o","u"];

for (let letra of string) {
  let letraMinuscula = letra.toLowerCase();
  if (vogais.includes(letraMinuscula)) {
    contador++;
  }
}

console.log(`A string contém ${contador}  vogais`);