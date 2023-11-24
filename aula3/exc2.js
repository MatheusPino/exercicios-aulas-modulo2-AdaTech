/* 2)
Crie um array de números e calcule a soma de todos os números no array.
*/

let array = [1, 2, 3, 4];

let soma = 0;

array.forEach(elem => {
  soma = soma + elem;
})

console.log(soma)