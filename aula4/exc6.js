//6) Verificação de numero par ou impar: 
//Solicite ao usuário para inserir um número e use uma estrutura if-else para 
//determinar se o número é par ou ímpar.

let numero = 3;
let mensagem = "";

if ((numero%2) == 0) {
  mensagem = "O número é par."
} else {
  mensagem = "O número é ímpar."
}

console.log(mensagem);