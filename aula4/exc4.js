//4) Conversão de Temperatura:
//Peça ao usuário para inserir uma temperatura em graus Celsius e use uma 
//instrução if-else para converter essa temperatura para Fahrenheit ou vice-versa, 
//com base na escolha do usuário.

let temperaturaInicial = 30;
let = temperaturaConvertida = null;
let mensagem = "";

 // escolha c para celsius e f para fahrenheit.
let unidade = "f"

if (unidade.toLowerCase() == "f") {
  temperaturaConvertida = (temperaturaInicial - 32) / 1.8;
  mensagem = "A temperatura em Celsius é " + temperaturaConvertida.toFixed(2);
} else if (unidade.toLowerCase() == "c") {
  temperaturaConvertida = (temperaturaInicial * 1.8) + 32;
  mensagem = "A temperatura em Fahrenheit é " + temperaturaConvertida.toFixed(2);
} else {
  mensagem = "Unidade não existente."
}

console.log(mensagem);