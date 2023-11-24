// 2)Crie uma função que calcule a média de um array de números.

let array = [2, 9, 0, 3, 6];

function mediaArray(array) {
  let soma = 0;
  for (let numb of array) {
    soma = soma + numb;
  }
  const media = soma / array.length;
  return media.toFixed(2);
}

let mediaFinal = mediaArray(array);

console.log(mediaFinal);