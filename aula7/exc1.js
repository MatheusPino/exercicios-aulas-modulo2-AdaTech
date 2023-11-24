//1) Defina uma função calculadora que aceita três argumentos:
// dois números e uma operação (por exemplo, '+', '-', '*', '/'). 
// A função deve realizar a operação especificada nos números.

function calculadora(num1, num2, op) {
  if (op == "+") {
    return num1 + num2
  } else if (op == "-") {
    return num1 - num2
  } else if (op == "/") {
    return num1 / num2
  } else if (op == "*") {
    return num1 * num2
  } else {
    "Operador inválido"
  }
}
let resultado = calculadora(1, 2, "*");
console.log(resultado);




//5) Escreva uma função que solicite dois números do usuário e divida um número
//pelo outro. Use um bloco try/catch para garantir que a divisão seja segura e
//trate qualquer exceção que possa ocorrer.


//6) Validação de E-mail: Crie uma função que verifique se um e-mail é válido.
//Use um bloco try/catch para capturar exceções relacionadas à validação do e-mail.

//7) Acesso a Propriedades de Objeto: Crie um objeto com propriedades e tente
//acessar uma propriedade que não existe. Use um bloco try/catch para capturar o
//erro.

//8) Crie uma função que tente converter uma string em um número.
//Use um bloco try/catch para tratar erros de conversão.