// 3) Implemente uma função encadeamentoFuncoes que aceita um número como entrada
//e encadeia as seguintes operações: dobrar, subtrair 5 e então elevar ao quadrado.
// A função deve retornar o resultado final.

function cadeiaDeOperacoes(numb) {

  function dobra(numb) {
    return numb = numb * 2;
  }
  function subtraiCinco(numb) {
    return numb = dobra(numb) - 5;
  }
  function elevaAoQuadrado(numb) {
    return subtraiCinco(numb) * subtraiCinco(numb);
  }

  return elevaAoQuadrado(numb);
}

console.log(cadeiaDeOperacoes(5));