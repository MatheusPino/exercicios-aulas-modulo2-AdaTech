
//3) Calculadora de IMC:
//Crie uma calculadora de índice de massa corporal (IMC) que peça ao usuário 
//para inserir seu peso e altura. 
//Em seguida, use um bloco if-else para exibir uma mensagem que classifica a 
//condição do usuário com base no IMC calculado.

let peso = 72; // quilos
let altura = 1.80; // metros
let mensagem = "";
const imc = peso / (altura * altura);

if (imc < 18.5) {
  mensagem = "Abaixo do ideal"
} else if (imc >= 18.5 && imc <= 24.9) {
  mensagem = "Saudavel";
} else if (imc > 24.9 && imc <= 29.9) {
  mensagem = "Sobrepeso";
} else if (imc > 29.9 && imc <= 34.9) {
  mensagem = "Obeso";
} else if (imc > 34.9 && imc <= 39.9) {
  mensagem = "Obesidade classe 2";
} else {
mensagem = "Obesidade classe 3"
}

console.log(mensagem);