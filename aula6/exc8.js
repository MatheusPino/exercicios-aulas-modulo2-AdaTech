//8) Escreva um loop para calcular o fatorial de um número fornecido.
function calculaFatorial(numb){
  let fatorial = 1;
  for (let i = 1; i <= numb; i++){
    fatorial = fatorial * i;
  }
  return fatorial;
}

let resultado = calculaFatorial(4);

console.log(resultado);

