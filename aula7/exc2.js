//2)Crie uma função inverteString que aceita uma string como
//entrada e retorna a string invertida.

function inverteString(str) {
  let invertida = "";
  for (let i = (str.length - 1); i >= 0; i--) {
    invertida += str[i];
  }
  return console.log(invertida);
}

inverteString("falo");