//5) Validação de Login:
//Crie um formulário de login que solicite ao usuário um nome de usuário 
//e uma senha. Use estruturas if-else para verificar se as credenciais inseridas 
//estão corretas ou não.

let usuarioValido = "matheus";
let senhaValida = "senha";

let usuarioInserido = "Matheus";
let senhaInserida = "senha";

if (usuarioInserido.toLowerCase() == usuarioValido) {
  mensagem = senhaInserida == senhaValida ? "Login efetuado com sucesso." : "Senha inválida."
} else {
  mensagem = "Usuário inválido."
}

console.log(mensagem);
